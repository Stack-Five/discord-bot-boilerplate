const child_process = require('child_process');

let outputs = [];

exports.run = async (
  command,
  inputs,
) =>
  new Promise(async resolve => {
    outputs = [];
    let proc;

    proc = child_process.exec(command);

    proc.stdout.on('data', data => outputs.push(data));
    proc.stderr.on('data', data => outputs.push(data));

    const sendInputs = async inputs => {
      await inputs.reduce(
        (previousPromise, input) =>
          new Promise(async resolve => {
            if (previousPromise) {
              await previousPromise;
            }

            setTimeout(() => {
              proc.stdin.write(input);
              resolve();
            }, 250);
          }),
        null
      );

      proc.stdin.end();
    };

    await sendInputs(inputs);

    proc.on('exit', () => resolve({ outputs, lastOutput: [...outputs].pop() }));
  });

// https://www.tldp.org/LDP/abs/html/escapingsection.html
exports.DOWN = '\x1B\x5B\x42';
exports.UP = '\x1B\x5B\x41';
exports.ENTER = '\x0D';
exports.SPACE = '\x20';
exports.EXIT = 'exit 0';