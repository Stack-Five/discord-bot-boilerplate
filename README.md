# Discord Bot Boilerplate

This boilerplate is for single-tenant Discord bots (ie. installing on a single server).

## Requirements

1) Node.js version 16.x+
2) Solid understanding of JavaScript
3) A Discord account, and the Discord application installed

## Setting Up Your Environment

1) Run `yarn` to install dependencies.
2) Create a blank `.env` file in the root of this project, and copy the contents from the `.env.example` file into it. These are the environment variables we will be using.
3) Navigate to the [Discord developer portal](https://discord.com/developers/applications) and sign in.
4) Click on the `New Application` button, and add a name for your Discord bot.
5) Click on the `Bot` button in the navigation on the lefthand side of the page.
6) Click on the `Add Bot` button, and then `Yes, do it!` in the pop up modal. Note: If you application name is not unique, you will receive an error in this step. You can change your application name in the `General Information` tab to something unique, and then try this step again.
7) If you want your bot to be only privately accessible, make sure you turn off the `Public Bot` toggle. This can be changed later.
8) Make sure that the `Presence Intent`, `Server Members Intent`, and `Message Content Intent` toggles are all turned on.
9) Click the `Save Changes` button at the bottom of the page.
10) Scroll to the top of the page, and click on the `Reset Token` button underneath the bot icon, and then click `Yes, do it` in the pop up modal. This will generate a secret token that will only be displayed once. Copy and paste this into the `.env` file you created in the root of your project for the `DISCORD_BOT_TOKEN` variable.
11) In the lefthand navigation, click on the `OAuth2` button.
12) Copy the `Client ID` value, and paste it as the `DISCORD_CLIENT_ID` value in your `.env` file.
13) In your Discord application, click the `+` icon in your server list (the `Add a Server` button). Click on `Create My Own`, `For me and my friends`, add a name, and then click `Create`.
14) You should now see your newly created Discord server in your server list. Right click on it, and click `Copy ID` (at the bottom of the list). If you don't see this option, you may need to enable [Developer Mode](#enable-discord-developer-mode). See instructions below.
15) In your `.env` file, paste your Discord server ID into the `DISCORD_GUILD_ID` parameter. Note: The discord.js docs will refer to "Servers" as "Guilds".
16) Follow the bot installation steps below to add your newly created bot to your new Discord server!

## Installing your bot

1) If you closed the Discord developer portal, navigate to the [Discord developer portal](https://discord.com/developers/applications) and select the application you created in the previous steps.
2) Click on the `OAuth 2` button in the navigation bar.
3) Click on the `URL Generator` option in the navigation bar.
4) In the list of permission options, click on `Bot` and `applications.commands`. A new set of bot permissions will appear below.
5) In the bot permissions section, click on `Administrator`.
6) At the bottom of the page, you will see a generated URL. Click the `Copy` button, and paste it into a new tab in your web browser.
7) In the `Add to Server` dropdown, select the server you created in the previous steps, and then click `Continue`.
8) Click on the `Authorize` button.
9) You should receive a Discord notification that your Bot has successfully joined your server! Now that your bot is integrated, we can now start writing code.

## Testing your Bot

In this boilerplate, we have set up a simple `Hello World` command for you to test the bot out.

1) Make sure your boilerplate server is running with the `yarn dev` command. If everything works properly, you should see the following console messages:
    * App listening on port 3000...
    * Successfully registered application commands.
    * Discord Bot is waiting for interactions...
2) In your Discord server, let's test out our `Hello World` command. In the `#general` channel, type `/hello`. You should see a description from our Bot explaining what the command is used for. If you press the enter key and submit the command, you will see two cool things happening:
    * The bot will respond to your command in the `#general` channel with `World!`, and you will also receive a direct message from the bot with `World!` as well! Pretty cool, huh?
3) If the above steps worked properly, you're now ready to begin your development. If you see errors in your console, it's likely that you either missed a step, or you forgot to set up the proper environment variables. In either case, feel free to open an issue on Github with your issue, or you can message one of our developers directly and we'd be happy to help.

## Writing your first command

This is where you can start getting creative. To create a new command, you can reference the `bot/commands/helloWorld.js` file.

1) Create a file inside of the `bot/commands` directory, and name it something related to your command such as `myFirstCommand.js`.
2) You can handle any sort of slash command, or input interaction in your newly created file. The sky is the limit! The wonderful developers at [discord.js](https://discord.js.org/#/docs/discord.js/stable/general/welcome) have created some fantastic guides to show you how to integrate even deeper concepts beyond just slash commands. Get creative, and be sure to share your creations with our team on [Twitter](https://twitter.com/stackfive_io)!

## Closing remarks

Your boilerplate server MUST be running in order for your commands to register. Your bot will not be able to receive interactions, or send responses if your server is not running. Also note, your bot configuration can only run on one server at a time. If you are doing active development, and you have deployed your bot, it is recommended that you create a development bot and Discord server for testing out your code, and a production bot and Discord server.

## Deployment

You can deploy your bot anywhere you'd like. For the sake of simplicity, you can easily [deploy to Heroku](https://devcenter.heroku.com/articles/github-integration). Just make sure you set up all of your environment variables on your Heroku server when you deploy your bot, and everything else should work as expected.

## Enable Discord Developer Mode
If you need to enable Discord developer mode, follow these steps:

1) Open up the Discord app
2) Click on the settings cog in the bottom left corner
3) Go to Advanced (near the bottom)
4) Toggle `Developer Mode` on
5) Repeat step 11 above.


## Contributing

Please create a pull request with any boilerplate-related changes you think might be useful to other developers.

## Contact

We'd love to hear from you! Please feel free to email us at [hello@stackfive.io](mailto:hello@stackfive.io), or reach out to us on [Twitter](https://twitter.com/stackfive_io).