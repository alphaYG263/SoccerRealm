const { AoiClient } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");

const client = new AoiClient({
  token: process.env["token"],

  prefix: ",",

  intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages"],

  events: ["onMessage", "onInteractionCreate"],

  database: {
    type: "aoi.db",

    db: require("@akarui/aoi.db"),

    dbType: "KeyValue",

    tables: ["main"],

    securityKey: "a-32-characters-long-string-here",
  },
});
const canvas = new AoiCanvas(client);
client.readyCommand({
  channel: "1230509648092729374",
  code: `╭───━━━━━━━━━━━━━━━───╮
・$userTag[$clientID]
・Ping: $ping ms
・Commands loaded: $commandsCount
・Server: $guildcount
・$username[$clientOwnerIDs]#$discriminator[$clientOwnerIDs]
╰───━━━━━━━━━━━━━━━───╯
$registerFont[./fonts/Lato-Bold.ttf;Lato-Bold]
$registerFont[./fonts/Lato-BlackItalic.ttf;Lato-BlackItalic]
$registerFont[./fonts/Baloo-Regular.ttf;Baloo-Regular]
`,
});
client.loadCommands("./commands/", true);
client.variables({
  debut: "11/05/2024",
  bronze_league: "https://media.discordapp.net/attachments/1094425576107946185/1239121059106521109/image_2024-05-12_131305062-removebg-preview.png?ex=6641c4ea&is=6640736a&hm=5e0d1ba273d6852f95f8c7d5364dc403766166bcdb79707e2a26252766589412&=&format=webp&quality=lossless",
  silver_league: "https://media.discordapp.net/attachments/1094425576107946185/1239121058875965490/image_2024-05-12_131324288-removebg-preview.png?ex=6641c4ea&is=6640736a&hm=8c714b6dc99b748af6b305d35016f61bcb94c5d5a2d3fcd2c351a36bd6ea47ba&=&format=webp&quality=lossless",
  gold_league: "https://media.discordapp.net/attachments/1094425576107946185/1239121058678964244/image_2024-05-12_131354016-removebg-preview.png?ex=6641c4ea&is=6640736a&hm=1f86e760b67945d5e44d30713d6bf2f6686ffe14d29c18cfdb7cda2b7600fafa&=&format=webp&quality=lossless",
  diamond_league: "https://media.discordapp.net/attachments/1094425576107946185/1239121058431238164/image_2024-05-12_131408916-removebg-preview.png?ex=6641c4ea&is=6640736a&hm=ef37502a3c57b3f49d38ca1d09901355c426be3fa28c6e8c1b5124f4e2d78ad7&=&format=webp&quality=lossless",
  level: "0",
  exp: "0",
  badge1: "https://media.discordapp.net/attachments/1230509648092729374/1239871236562223195/image_2024-05-11_234050719-removebg-preview.png?ex=66447f92&is=66432e12&hm=de1e832fb96e9cefaf46e02dff092f22fae844a6573368177a53b44009ce94b6&=&format=webp&quality=lossless&width=350&height=350",
  badge2: "https://media.discordapp.net/attachments/1230509648092729374/1239871236562223195/image_2024-05-11_234050719-removebg-preview.png?ex=66447f92&is=66432e12&hm=de1e832fb96e9cefaf46e02dff092f22fae844a6573368177a53b44009ce94b6&=&format=webp&quality=lossless&width=350&height=350",
  badge3: "https://media.discordapp.net/attachments/1230509648092729374/1239871236562223195/image_2024-05-11_234050719-removebg-preview.png?ex=66447f92&is=66432e12&hm=de1e832fb96e9cefaf46e02dff092f22fae844a6573368177a53b44009ce94b6&=&format=webp&quality=lossless&width=350&height=350",
  name: "AlphaYG",
  match: "false",
  yeet: "false",
  player: "",
  opp: "",
  kick1: "middle",
  defend1: "middle",
  kick2: "middle",
  defend2: "middle",
  kick3: "middle",
  defend3: "middle",
  players: "0",
  opps: "0",
  playern: "player1",
  oppn: "player2",
  mes1: "",
  mes2: "",
  mes3: "",
  mes4: "",
  mes5: "",
  mes6: "",
  main: "",
  channel: "",
  server: "",
  stats1: "onGoing",
  stats2: "onGoing",
  stats3: "onGoing",
  saves: "0",
  attempts: "0",
  winstreak: "0",
  matches: "0",
  won: "0",
  tie: "0",
  bio: "Foot Ball Is My Fav <3",
  goals: "0",
  srcoins: "0",
  // elite mode
  echannel: "id",
  emessage: "",
  emessage1: "",
  eplayeras: "0",
  eplayerbs: "0",
  eplayer1: "id",
  eplayer2: "id",
  eplayer3: "id",
  eplayer4: "id",
  eplayer5: "id",
  eplayer6: "id",
  eplayer7: "id",
  eplayer8: "id",
  eplayer9: "id",
  eplayer10: "id",
  eplayer1n: "player1",
  eplayer2n: "player2",
  eplayer3n: "player3",
  eplayer4n: "player4",
  eplayer5n: "player5",
  eplayer6n: "player6",
  eplayer7n: "player7",
  eplayer8n: "player8",
  eplayer9n: "player9",
  eplayer10n: "player10",
  current: "0",
  echoose1: "",
  echoose2: "",
  echoose3: "",
  echoose4: "",
  echoose5: "",
  echoose6: "",
  echoose7: "",
  echoose8: "",
  echoose9: "",
  echoose10: "",
  echoose11: "",
  echoose12: "",
  echoose13: "",
  echoose14: "",
  echoose15: "",
  echoose16: "",
  echoose17: "",
  echoose18: "",
  echoose19: "",
  echoose20: "",
  ordera: "",
  orderb: "",
  akick1: "middle",
  akick2: "middle",
  akick3: "middle",
  akick4: "middle",
  akick5: "middle",
  bdefend1: "middle",
  bdefend2: "middle",
  bdefend3: "middle",
  bdefend4: "middle",
  bdefend5: "middle",
  adefend1: "middle",
  adefend2: "middle",
  adefend3: "middle",
  adefend4: "middle",
  adefend5: "middle",
  bkick1: "middle",
  bkick2: "middle",
  bkick3: "middle",
  bkick4: "middle",
  bkick5: "middle",
  estats1: "",
  estats2: "",
  estats3: "",
  estats4: "",
  estats5: "",
  estats6: "",
  estats7: "",
  estats8: "",
  estats9: "",
  estats10: "",
  estats11: "",
  estats12: "",
  estats13: "",
  estats14: "",
  estats15: "",
  estats16: "",
  estats17: "",
  estats18: "",
  estats19: "",
  estats20: "",
  host: "id",
  ecaptaina: "",
  ecaptainb: "",
  ecaptain: "false",
  etoss: "false",
  etossrandom: "tails",
  etosswinner: "",
  etosslooser: "",
  eteamaname: "Team A",
  eteambname: "Team B",
  playercount: "0",
});
client.command({
  name: "createelite",
  aliases: ["ce"],
  code: `$setGlobalUserVar[match;true]
  $sendMessage[{newEmbed:{title:Elite Mode}{description:This mode is still in developing stage please tell any bugs or errors to developer}{thumbnail:https://media.discordapp.net/attachments/1094425576107946185/1230717008228778069/image_2024-04-19_083833239-removebg-preview.png?}{field:Team A:1. $getGlobalUserVar[eplayer1n] ||(1)||
2. $getGlobalUserVar[eplayer3n] ||(3)||
3. $getGlobalUserVar[eplayer5n] ||(5)||
4. $getGlobalUserVar[eplayer7n] ||(7)||
5. $getGlobalUserVar[eplayer9n] ||(9)||:false}{field:Team B:1. $getGlobalUserVar[eplayer2n] ||(2)||
2. $getGlobalUserVar[eplayer4n] ||(4)||
3. $getGlobalUserVar[eplayer6n] ||(6)||
4. $getGlobalUserVar[eplayer8n] ||(8)||
5. $getGlobalUserVar[eplayer10n] ||(10)||:false}};false]
  $setGlobalUserVar[host;$authorID]
  $setGlobalUserVar[playercount;1]
  $setGlobalUserVar[ecaptaina;$authorID]
  $setGlobalUserVar[ecaptainb;$authorID]
  $setGlobalUserVar[eplayer1n;$username[$authorID]]
  $setGlobalUserVar[eplayer1;$authorID]
  $setGlobalUserVar[match;true]
  $setGlobalUserVar[echannel;$channelID]
$onlyIf[$getGlobalUserVar[match]==false;You are already in a match]
  `,
}); // create
client.command({
  name: "swap",
  aliases: ["s"],
  code: `
  $sendMessage[{newEmbed:{title:Elite Mode}{description:This mode is still in developing stage please tell any bugs or errors to developer}{thumbnail:https://media.discordapp.net/attachments/1094425576107946185/1230717008228778069/image_2024-04-19_083833239-removebg-preview.png?}{field:Team A:1. $getGlobalUserVar[eplayer1n] ||(1)||
2. $getGlobalUserVar[eplayer3n] ||(3)||
3. $getGlobalUserVar[eplayer5n] ||(5)||
4. $getGlobalUserVar[eplayer7n] ||(7)||
5. $getGlobalUserVar[eplayer9n] ||(9)||:false}{field:Team B:1. $getGlobalUserVar[eplayer2n] ||(2)||
2. $getGlobalUserVar[eplayer4n] ||(4)||
3. $getGlobalUserVar[eplayer6n] ||(6)||
4. $getGlobalUserVar[eplayer8n] ||(8)||
5. $getGlobalUserVar[eplayer10n] ||(10)||:false}};false]
  $setGlobalUserVar[eplayer$message[2]n;$get[an]]
  $setGlobalUserVar[eplayer$message[2];$get[a]]
  $setGlobalUserVar[eplayer$message[1]n;$get[bn]]
  $setGlobalUserVar[eplayer$message[1];$get[b]]
  $let[bn;$getGlobalUserVar[eplayer$message[2]n]]
  $let[b;$getGlobalUserVar[eplayer$message[2]]]
  $let[an;$getGlobalUserVar[eplayer$message[1]n]]
  $let[a;$getGlobalUserVar[eplayer$message[1]]]
$onlyIf[$getGlobalUserVar[eplayer$message[2]]!=id;The position $message[2] is empty and has no user in it]
$onlyIf[$getGlobalUserVar[eplayer$message[1]]!=id;The position $message[1] is empty and has no user in it]
$onlyIf[$getGlobalUserVar[ecaptainb]!=$getGlobalUserVar[eplayer$message[2]];The Player $message[2] is captain , so you cant swap him]
$onlyIf[$getGlobalUserVar[ecaptainb]!=$getGlobalUserVar[eplayer$message[1]];The Player $message[1] is captain , so you cant swap him]
$onlyIf[$getGlobalUserVar[ecaptaina]!=$getGlobalUserVar[eplayer$message[2]];The Player $message[2] is captain , so you cant swap him]
$onlyIf[$getGlobalUserVar[ecaptaina]!=$getGlobalUserVar[eplayer$message[1]];The Player $message[1] is captain , so you cant swap him]
$onlyIf[$getGlobalUserVar[host]==$authorID;You are not the host of this match]
$onlyIf[$getGlobalUserVar[echannel]==$channelID;Please use this command in the channel where you started elite mode match]
$onlyIf[$getGlobalUserVar[match]==true;You didnt joined any match]
  `,
}); // swap
client.command({
  name: "join",
  aliases: ["j"],
  code: `$setGlobalUserVar[match;true]
$sendMessage[{newEmbed:{title:Elite Mode}{description:This mode is still in developing stage please tell any bugs or errors to developer}{thumbnail:https://media.discordapp.net/attachments/1094425576107946185/1230717008228778069/image_2024-04-19_083833239-removebg-preview.png?}{field:Team A:1. $getGlobalUserVar[eplayer1n;$message[1]] ||(1)||
2. $getGlobalUserVar[eplayer3n;$message[1]] ||(3)||
3. $getGlobalUserVar[eplayer5n;$message[1]] ||(5)||
4. $getGlobalUserVar[eplayer7n;$message[1]] ||(7)||
5. $getGlobalUserVar[eplayer9n;$message[1]] ||(9)||:false}{field:Team B:1. $getGlobalUserVar[eplayer2n;$message[1]] ||(2)||
2. $getGlobalUserVar[eplayer4n;$message[1]] ||(4)||
3. $getGlobalUserVar[eplayer6n;$message[1]] ||(6)||
4. $getGlobalUserVar[eplayer8n;$message[1]] ||(8)||
5. $getGlobalUserVar[eplayer10n;$message[1]] ||(10)||:false}};false]
$setGlobalUserVar[match;true]
$setGlobalUserVar[echannel;$channelID]
$setGlobalUserVar[host;$message[1]]
$setGlobalUserVar[eplayer$getGlobalUserVar[playercount;$message[1]];$authorID;$message[1]]
$setGlobalUserVar[eplayer$getGlobalUserVar[playercount;$message[1]]n;$username[$authorID];$message[1]]
$setGlobalUserVar[playercount;$math[$getGlobalUserVar[playercount;$message[1]]+1];$message[1]]
$onlyIf[$getGlobalUserVar[echannel;$message[1]]==$channelID;this is not the channel where that user is the host]
$onlyIf[$getGlobalUserVar[host;$message[1]]==$message[1];The User is not the host of any match]
$onlyIf[$getGlobalUserVar[match;$message[1]]==true;The User is not playing any match]
$onlyIf[$charCount[$message[1]]==18;The user id is invalid]
$onlyIf[$getGlobalUserVar[match]==false;You are already in a match]
  `,
}); // join
client.command({
  name: "players",
  aliases: ["pl"],
  code: `$sendMessage[{newEmbed:{title:Elite Mode}{description:This mode is still in developing stage please tell any bugs or errors to developer}{thumbnail:https://media.discordapp.net/attachments/1094425576107946185/1230717008228778069/image_2024-04-19_083833239-removebg-preview.png?}{field:$getGlobalUserVar[eteamaname;$getGlobalUserVar[host]]:Captain : $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]:false}{field:Squad:1. $getGlobalUserVar[eplayer1n;$getGlobalUserVar[host]] ||(1)||
2. $getGlobalUserVar[eplayer3n;$getGlobalUserVar[host]] ||(3)||
3. $getGlobalUserVar[eplayer5n;$getGlobalUserVar[host]] ||(5)||
4. $getGlobalUserVar[eplayer7n;$getGlobalUserVar[host]] ||(7)||
5. $getGlobalUserVar[eplayer9n;$getGlobalUserVar[host]] ||(9)||:false}{field:$getGlobalUserVar[eteambname;$getGlobalUserVar[host]]:Captain : $if[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]]==;NoOne;$username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]]]]:false}{field:Squad:1. $getGlobalUserVar[eplayer2n;$getGlobalUserVar[host]] ||(2)||
2. $getGlobalUserVar[eplayer4n;$getGlobalUserVar[host]] ||(4)||
3. $getGlobalUserVar[eplayer6n;$getGlobalUserVar[host]] ||(6)||
4. $getGlobalUserVar[eplayer8n;$getGlobalUserVar[host]] ||(8)||
5. $getGlobalUserVar[eplayer10n;$getGlobalUserVar[host]] ||(10)||:false}};false] 
  `,
}); // pl
client.command({
  name: "chall",
  code: `
$awaitMessages[1219977149793042483;$authorID;25s;left,middle,right;left1d,middle1d,right1d;{execute:yeetp} Times up! Please yeet the match and try again;{};$authorID]
$setGlobalUserVar[mes1;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$authorID;true]]
$setGlobalUserVar[main;$getGlobalUserVar[main;$mentioned[1]]]
$setGlobalUserVar[main;$getGlobalUserVar[main];$mentioned[1]]
$setGlobalUserVar[main;$sendMessage[{newEmbed: {title: Classic Match}{description:**$username[$authorID]** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$username[$mentioned[1]]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}};true]]
$setGlobalUserVar[channel;$channelID]
$setGlobalUserVar[channel;$channelID;$mentioned[1]]
  $setGlobalUserVar[match;true]
  $setGlobalUserVar[match;true;$mentioned[1]]
  $setGlobalUserVar[player;$authorID;$mentioned[1]]
  $setGlobalUserVar[player;$authorID]
  $setGlobalUserVar[opp;$mentioned[1];$mentioned[1]]
  $setGlobalUserVar[opp;$mentioned[1]]
  $setGlobalUserVar[oppn;$username[$mentioned[1]]]
$setGlobalUserVar[oppn;$username[$mentioned[1]];$mentioned[1]]
$setGlobalUserVar[playern;$username[$authorID]]
$setGlobalUserVar[playern;$username[$authorID];$mentioned[1]]
$onlyIf[$isUserDMEnabled[$mentioned[1]]==true;The Opponent dont accept dms from me!]
$onlyIf[$isUserDMEnabled[$authorID]==true;You are not Accepting the dms from me!]

  `,
}); // classic
client.awaitedCommand({
  name: "left1",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left2d,middle2d,right2d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
$setGlobalUserVar[mes3;$getGlobalUserVar[mes3];$getGlobalUserVar[player]]
$setGlobalUserVar[mes3;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
 $editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern]**$getGlobalUserVar[players] - $getGlobalUserVar[opps] ** $getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel]]
$setGlobalUserVar[stats1;$getGlobalUserVar[stats1];$getGlobalUserVar[player]]
$setGlobalUserVar[stats1;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored goal]]
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false]You Have kicked the Ball into left side of it.
  $deleteMessage[$getGlobalUserVar[mes2]]  $if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?] 
$setGlobalUserVar[kick1;left;$getGlobalUserVar[player]]
$setGlobalUserVar[kick1;left]`,
});
client.awaitedCommand({
  name: "middle1",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left2d,middle2d,right2d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
$setGlobalUserVar[mes3;$getGlobalUserVar[mes3];$getGlobalUserVar[player]]
$setGlobalUserVar[mes3;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
$editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel]] 
$setGlobalUserVar[stats1;$getGlobalUserVar[stats1];$getGlobalUserVar[player]]
$setGlobalUserVar[stats1;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored goal]]
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false]You Have kicked the Ball into middle side of it.
  $deleteMessage[$getGlobalUserVar[mes2]]  $if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?] 
$setGlobalUserVar[kick1;middle;$getGlobalUserVar[player]]
$setGlobalUserVar[kick1;middle]`,
});
client.awaitedCommand({
  name: "right1",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left2d,middle2d,right2d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
$setGlobalUserVar[mes3;$getGlobalUserVar[mes3];$getGlobalUserVar[player]]
$setGlobalUserVar[mes3;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
 $editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel]] 
$setGlobalUserVar[stats1;$getGlobalUserVar[stats1];$getGlobalUserVar[player]]
$setGlobalUserVar[stats1;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored goal]]
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false]You Have kicked the Ball into right side of it.
  $deleteMessage[$getGlobalUserVar[mes2]] $if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick1;right;$getGlobalUserVar[player]]
$setGlobalUserVar[kick1;right]`,
}); // right 1
client.awaitedCommand({
  name: "left2",
  code: `  
$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left3d,middle3d,right3d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[mes5;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]
  $editMessage[$getGlobalUserVar[main;$getGlobalUserVar[player]];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel;$getGlobalUserVar[player]]]
$setGlobalUserVar[stats2;$getGlobalUserVar[stats2];$getGlobalUserVar[opp]]
$setGlobalUserVar[stats2;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];:gloves: $getGlobalUserVar[oppn] saved goal;⚽ $getGlobalUserVar[playern] scored a goal]]
$setGlobalUserVar[players;$getGlobalUserVar[players];$getGlobalUserVar[opp]]
$setGlobalUserVar[players;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];$getGlobalUserVar[players];$math[$getGlobalUserVar[players]+1]]]
  $sendDm[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[opp];false]You Have kicked the Ball into left side of it.
  $deleteMessage[$getGlobalUserVar[mes4]] $if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick2;left;$getGlobalUserVar[opp]]
$setGlobalUserVar[kick2;left]`,
});
client.awaitedCommand({
  name: "middle2",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left3d,middle3d,right3d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[mes5;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]
  $editMessage[$getGlobalUserVar[main;$getGlobalUserVar[player]];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel;$getGlobalUserVar[player]]]
$setGlobalUserVar[stats2;$getGlobalUserVar[stats2];$getGlobalUserVar[opp]]
$setGlobalUserVar[stats2;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];:gloves: $getGlobalUserVar[oppn] saved goal;⚽ $getGlobalUserVar[playern] scored a goal]]
$setGlobalUserVar[players;$getGlobalUserVar[players];$getGlobalUserVar[opp]]
$setGlobalUserVar[players;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];$getGlobalUserVar[players];$math[$getGlobalUserVar[players]+1]]]
  $sendDm[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[opp];false]You Have kicked the Ball into middle side of it.
  $deleteMessage[$getGlobalUserVar[mes4]] $if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick2;middle;$getGlobalUserVar[opp]]
$setGlobalUserVar[kick2;middle]`,
});
client.awaitedCommand({
  name: "right2",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left3d,middle3d,right3d;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[mes5;$sendDm[Defend The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]
  $editMessage[$getGlobalUserVar[main;$getGlobalUserVar[player]];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}};$getGlobalUserVar[channel;$getGlobalUserVar[player]]]
$setGlobalUserVar[stats2;$getGlobalUserVar[stats2];$getGlobalUserVar[opp]]
$setGlobalUserVar[stats2;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];:gloves: $getGlobalUserVar[oppn] saved goal;⚽ $getGlobalUserVar[playern] scored a goal]]
  $setGlobalUserVar[players;$getGlobalUserVar[players];$getGlobalUserVar[opp]]
  $setGlobalUserVar[players;$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];$getGlobalUserVar[players];$math[$getGlobalUserVar[players]+1]]]
  $sendDm[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[opp];false]You Have kicked the Ball into right side of it.
  $deleteMessage[$getGlobalUserVar[mes4]] $if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick2;right;$getGlobalUserVar[opp]]
$setGlobalUserVar[kick2;right]`,
}); // right 2
client.awaitedCommand({
  name: "left3",
  code: `
$setGlobalUserVar[kick1;middle;$get[opp]]
$setGlobalUserVar[defend1;middle;$get[opp]]
$setGlobalUserVar[kick2;middle;$get[opp]]
$setGlobalUserVar[defend2;middle;$get[opp]]
$setGlobalUserVar[kick3;middle;$get[opp]]
$setGlobalUserVar[defend3;middle;$get[opp]]
$setGlobalUserVar[channel;;$get[opp]]
$setGlobalUserVar[server;;$get[opp]]
$setGlobalUserVar[main;;$get[opp]]
$setGlobalUserVar[stats1;Ongoing;$get[opp]]
$setGlobalUserVar[stats2;Ongoing;$get[opp]]
$setGlobalUserVar[stats3;Ongoing;$get[opp]]
$setGlobalUserVar[mes6;;$get[opp]]
$setGlobalUserVar[mes5;;$get[opp]]
$setGlobalUserVar[mes4;;$get[opp]]
$setGlobalUserVar[mes3;;$get[opp]]
$setGlobalUserVar[mes2;;$get[opp]]
$setGlobalUserVar[mes1;;$get[opp]]
$setGlobalUserVar[oppn;;$get[opp]]
$setGlobalUserVar[playern;;$get[opp]]
$setGlobalUserVar[opps;0;$get[opp]]
$setGlobalUserVar[players;0;$get[opp]]
$setGlobalUserVar[opp;;$get[opp]]
$setGlobalUserVar[player;;$get[opp]]
  $setGlobalUserVar[kick1;middle;$get[player]]
  $setGlobalUserVar[defend1;middle;$get[player]]
  $setGlobalUserVar[kick2;middle;$get[player]]
  $setGlobalUserVar[defend2;middle;$get[player]]
  $setGlobalUserVar[kick3;middle;$get[player]]
  $setGlobalUserVar[defend3;middle;$get[player]]
  $setGlobalUserVar[channel;;$get[player]]
  $setGlobalUserVar[server;;$get[player]]
  $setGlobalUserVar[main;;$get[player]]
  $setGlobalUserVar[stats1;Ongoing;$get[player]]
  $setGlobalUserVar[stats2;Ongoing;$get[player]]
  $setGlobalUserVar[stats3;Ongoing;$get[player]]
  $setGlobalUserVar[mes6;;$get[player]]
  $setGlobalUserVar[mes5;;$get[player]]
  $setGlobalUserVar[mes4;;$get[player]]
  $setGlobalUserVar[mes3;;$get[player]]
  $setGlobalUserVar[mes2;;$get[player]]
  $setGlobalUserVar[mes1;;$get[player]]
  $setGlobalUserVar[oppn;;$get[player]]
  $setGlobalUserVar[playern;;$get[player]]
  $setGlobalUserVar[opps;0;$get[player]]
  $setGlobalUserVar[players;0;$get[player]]
  $setGlobalUserVar[opp;;$get[player]]
  $setGlobalUserVar[player;;$get[player]]
  $let[player;$getGlobalUserVar[player]]  
  $let[opp;$getGlobalUserVar[opp]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];0;$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];0;1]]]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie]]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won;$getGlobalUserVar[player]]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];1;0]];$getGlobalUserVar[player]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];1;0]+$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];1;0]+$getGlobalUserVar[saves;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];1;0]+$getGlobalUserVar[saves]]]
$setGlobalUserVar[match;false;$getGlobalUserVar[player]]
$setGlobalUserVar[match;false]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts;$getGlobalUserVar[player]]+2];$getGlobalUserVar[player]]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts]+1]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches;$getGlobalUserVar[player]]+1];$getGlobalUserVar[player]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches]+1]]
$editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/1202297236709441628/1230011822417903636/final-de-jogo-cbf.gif?}};$getGlobalUserVar[channel]] 
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[stats3;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored a goal]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false] You Have kicked the Ball into right side of it.

$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick3;left;$getGlobalUserVar[player]]
$setGlobalUserVar[kick3;left]
  `,
});
client.awaitedCommand({
  name: "middle3",
  code: `
$setGlobalUserVar[kick1;middle;$get[opp]]
$setGlobalUserVar[defend1;middle;$get[opp]]
$setGlobalUserVar[kick2;middle;$get[opp]]
$setGlobalUserVar[defend2;middle;$get[opp]]
$setGlobalUserVar[kick3;middle;$get[opp]]
$setGlobalUserVar[defend3;middle;$get[opp]]
$setGlobalUserVar[channel;;$get[opp]]
$setGlobalUserVar[server;;$get[opp]]
$setGlobalUserVar[main;;$get[opp]]
$setGlobalUserVar[stats1;Ongoing;$get[opp]]
$setGlobalUserVar[stats2;Ongoing;$get[opp]]
$setGlobalUserVar[stats3;Ongoing;$get[opp]]
$setGlobalUserVar[mes6;;$get[opp]]
$setGlobalUserVar[mes5;;$get[opp]]
$setGlobalUserVar[mes4;;$get[opp]]
$setGlobalUserVar[mes3;;$get[opp]]
$setGlobalUserVar[mes2;;$get[opp]]
$setGlobalUserVar[mes1;;$get[opp]]
$setGlobalUserVar[oppn;;$get[opp]]
$setGlobalUserVar[playern;;$get[opp]]
$setGlobalUserVar[opps;0;$get[opp]]
$setGlobalUserVar[players;0;$get[opp]]
$setGlobalUserVar[opp;;$get[opp]]
$setGlobalUserVar[player;;$get[opp]]
  $setGlobalUserVar[kick1;middle;$get[player]]
  $setGlobalUserVar[defend1;middle;$get[player]]
  $setGlobalUserVar[kick2;middle;$get[player]]
  $setGlobalUserVar[defend2;middle;$get[player]]
  $setGlobalUserVar[kick3;middle;$get[player]]
  $setGlobalUserVar[defend3;middle;$get[player]]
  $setGlobalUserVar[channel;;$get[player]]
  $setGlobalUserVar[server;;$get[player]]
  $setGlobalUserVar[main;;$get[player]]
  $setGlobalUserVar[stats1;Ongoing;$get[player]]
  $setGlobalUserVar[stats2;Ongoing;$get[player]]
  $setGlobalUserVar[stats3;Ongoing;$get[player]]
  $setGlobalUserVar[mes6;;$get[player]]
  $setGlobalUserVar[mes5;;$get[player]]
  $setGlobalUserVar[mes4;;$get[player]]
  $setGlobalUserVar[mes3;;$get[player]]
  $setGlobalUserVar[mes2;;$get[player]]
  $setGlobalUserVar[mes1;;$get[player]]
  $setGlobalUserVar[oppn;;$get[player]]
  $setGlobalUserVar[playern;;$get[player]]
  $setGlobalUserVar[opps;0;$get[player]]
  $setGlobalUserVar[players;0;$get[player]]
  $setGlobalUserVar[opp;;$get[player]]
  $setGlobalUserVar[player;;$get[player]]
  $let[player;$getGlobalUserVar[player]]  
  $let[opp;$getGlobalUserVar[opp]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals]+$getGlobalUserVar[opps]]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals;$getGlobalUserVar[player]]+$getGlobalUserVar[players]];$getGlobalUserVar[player]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];0;$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];0;1]]]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie]]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won;$getGlobalUserVar[player]]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];1;0]];$getGlobalUserVar[player]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];1;0]+$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];1;0]+$getGlobalUserVar[saves;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];1;0]+$getGlobalUserVar[saves]]]
$setGlobalUserVar[match;false;$getGlobalUserVar[player]]
$setGlobalUserVar[match;false]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts;$getGlobalUserVar[player]]+2];$getGlobalUserVar[player]]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts]+1]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches;$getGlobalUserVar[player]]+1];$getGlobalUserVar[player]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches]+1]]
$editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/1202297236709441628/1230011822417903636/final-de-jogo-cbf.gif?}};$getGlobalUserVar[channel]] 
$setGlobalUserVar[stats3;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored a goal]]
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false]You Have kicked the Ball into right side of it.

$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick3;middle;$getGlobalUserVar[player]]
$setGlobalUserVar[kick3;middle]
  `,
});
client.awaitedCommand({
  name: "right3",
  code: `
$setGlobalUserVar[kick1;middle;$get[opp]]
$setGlobalUserVar[defend1;middle;$get[opp]]
$setGlobalUserVar[kick2;middle;$get[opp]]
$setGlobalUserVar[defend2;middle;$get[opp]]
$setGlobalUserVar[kick3;middle;$get[opp]]
$setGlobalUserVar[defend3;middle;$get[opp]]
$setGlobalUserVar[channel;;$get[opp]]
$setGlobalUserVar[server;;$get[opp]]
$setGlobalUserVar[main;;$get[opp]]
$setGlobalUserVar[stats1;Ongoing;$get[opp]]
$setGlobalUserVar[stats2;Ongoing;$get[opp]]
$setGlobalUserVar[stats3;Ongoing;$get[opp]]
$setGlobalUserVar[mes6;;$get[opp]]
$setGlobalUserVar[mes5;;$get[opp]]
$setGlobalUserVar[mes4;;$get[opp]]
$setGlobalUserVar[mes3;;$get[opp]]
$setGlobalUserVar[mes2;;$get[opp]]
$setGlobalUserVar[mes1;;$get[opp]]
$setGlobalUserVar[oppn;;$get[opp]]
$setGlobalUserVar[playern;;$get[opp]]
$setGlobalUserVar[opps;0;$get[opp]]
$setGlobalUserVar[players;0;$get[opp]]
$setGlobalUserVar[opp;;$get[opp]]
$setGlobalUserVar[player;;$get[opp]]
  $setGlobalUserVar[kick1;middle;$get[player]]
  $setGlobalUserVar[defend1;middle;$get[player]]
  $setGlobalUserVar[kick2;middle;$get[player]]
  $setGlobalUserVar[defend2;middle;$get[player]]
  $setGlobalUserVar[kick3;middle;$get[player]]
  $setGlobalUserVar[defend3;middle;$get[player]]
  $setGlobalUserVar[channel;;$get[player]]
  $setGlobalUserVar[server;;$get[player]]
  $setGlobalUserVar[main;;$get[player]]
  $setGlobalUserVar[stats1;Ongoing;$get[player]]
  $setGlobalUserVar[stats2;Ongoing;$get[player]]
  $setGlobalUserVar[stats3;Ongoing;$get[player]]
  $setGlobalUserVar[mes6;;$get[player]]
  $setGlobalUserVar[mes5;;$get[player]]
  $setGlobalUserVar[mes4;;$get[player]]
  $setGlobalUserVar[mes3;;$get[player]]
  $setGlobalUserVar[mes2;;$get[player]]
  $setGlobalUserVar[mes1;;$get[player]]
  $setGlobalUserVar[oppn;;$get[player]]
  $setGlobalUserVar[playern;;$get[player]]
  $setGlobalUserVar[opps;0;$get[player]]
  $setGlobalUserVar[players;0;$get[player]]
  $setGlobalUserVar[opp;;$get[player]]
  $setGlobalUserVar[player;;$get[player]]
  $let[player;$getGlobalUserVar[player]]  
  $let[opp;$getGlobalUserVar[opp]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals]+$getGlobalUserVar[opps]]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals;$getGlobalUserVar[player]]+$getGlobalUserVar[players]];$getGlobalUserVar[player]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals]+$getGlobalUserVar[opps]]]
$setGlobalUserVar[goals;$math[$getGlobalUserVar[goals;$getGlobalUserVar[player]]+$getGlobalUserVar[players]];$getGlobalUserVar[player]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];0;$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];0;1]]]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie]]]
$setGlobalUserVar[won;$math[$getGlobalUserVar[won;$getGlobalUserVar[player]]+$if[$getGlobalUserVar[players]>$getGlobalUserVar[opps];1;0]];$getGlobalUserVar[player]]
$setGlobalUserVar[tie;$math[$if[$getGlobalUserVar[players]==$getGlobalUserVar[opps];1;0]+$getGlobalUserVar[tie;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick1]==$getGlobalUserVar[defend1];1;0]+$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];1;0]+$getGlobalUserVar[saves;$getGlobalUserVar[player]]];$getGlobalUserVar[player]]
$setGlobalUserVar[saves;$math[$if[$getGlobalUserVar[kick2]==$getGlobalUserVar[defend2];1;0]+$getGlobalUserVar[saves]]]
$setGlobalUserVar[match;false;$getGlobalUserVar[player]]
$setGlobalUserVar[match;false]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts;$getGlobalUserVar[player]]+2];$getGlobalUserVar[player]]
$setGlobalUserVar[attempts;$math[$getGlobalUserVar[attempts]+1]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches;$getGlobalUserVar[player]]+1];$getGlobalUserVar[player]]
$setGlobalUserVar[matches;$math[$getGlobalUserVar[matches]+1]]
$editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern]** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
$getGlobalUserVar[stats1]
$getGlobalUserVar[stats2]
$getGlobalUserVar[stats3]}{image:https://media.discordapp.net/attachments/1202297236709441628/1230011822417903636/final-de-jogo-cbf.gif?}};$getGlobalUserVar[channel]] 
$setGlobalUserVar[stats3;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];:gloves: $getGlobalUserVar[playern] saved goal;⚽ $getGlobalUserVar[oppn] scored a goal]]
$setGlobalUserVar[opps;$getGlobalUserVar[opps];$getGlobalUserVar[player]]
$setGlobalUserVar[opps;$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];$getGlobalUserVar[opps];$math[$getGlobalUserVar[opps]+1]]]
$sendDm[$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By you https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! by striker https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?];$getGlobalUserVar[player];false]You Have kicked the Ball into right side of it.

$if[$getGlobalUserVar[kick3]==$getGlobalUserVar[defend3];The Goal Is Saved! By the GoalKeeper https://media.discordapp.net/attachments/934801675779194912/1230039774069522534/kepa-save.gif?;It is a Goal!!! https://media.discordapp.net/attachments/934801675779194912/1230040562455810058/goal-celebration-leo-messi.gif?]
$setGlobalUserVar[kick3;right;$getGlobalUserVar[player]]
$setGlobalUserVar[kick3;right]
  `,
}); // right 3
client.awaitedCommand({
  name: "left1d",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left1,middle1,right1;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
$setGlobalUserVar[defend1;left;$getGlobalUserVar[opp]]
  $setGlobalUserVar[defend1;left]
  $deleteMessage[$getGlobalUserVar[mes1]] You Have Defended the Ball into left side of it. Please wait for the Striker move 
$setGlobalUserVar[mes2;$getGlobalUserVar[mes2;$authorID];$getGlobalUserVar[opp]]
$setGlobalUserVar[mes2;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]`,
});
client.awaitedCommand({
  name: "middle1d",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left1,middle1,right1;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
  $setGlobalUserVar[defend1;middle;$getGlobalUserVar[opp]]
  $setGlobalUserVar[defend1;middle]
  $deleteMessage[$getGlobalUserVar[mes1]] You Have Defended the Ball into middle side of it. Please wait for the Striker move 
$setGlobalUserVar[mes2;$getGlobalUserVar[mes2;$authorID];$getGlobalUserVar[opp]]
$setGlobalUserVar[mes2;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]`,
});
client.awaitedCommand({
  name: "right1d",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left1,middle1,right1;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
  $setGlobalUserVar[defend1;right;$getGlobalUserVar[opp]]
  $setGlobalUserVar[defend1;right]
  $deleteMessage[$getGlobalUserVar[mes1]] You Have Defended the Ball into right side of it. Please wait for the Striker move 
$setGlobalUserVar[mes2;$getGlobalUserVar[mes2;$authorID];$getGlobalUserVar[opp]]
$setGlobalUserVar[mes2;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]`,
});
client.awaitedCommand({
  name: "left2d",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left2,middle2,right2;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[defend2;left;$getGlobalUserVar[player]]
  $setGlobalUserVar[defend2;left]
  $deleteMessage[$getGlobalUserVar[mes3]] You Have Defended the Ball into left side of it. Please wait for the Striker move 
$setGlobalUserVar[mes4;$getGlobalUserVar[mes4];$getGlobalUserVar[player]]
$setGlobalUserVar[mes4;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]`,
});
client.awaitedCommand({
  name: "middle2d",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left2,middle2,right2;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[defend2;middle;$getGlobalUserVar[player]]
  $setGlobalUserVar[defend2;middle]
  $deleteMessage[$getGlobalUserVar[mes3]] You Have Defended the Ball into middle side of it. Please wait for the Striker move 
$setGlobalUserVar[mes4;$getGlobalUserVar[mes4];$getGlobalUserVar[player]]
$setGlobalUserVar[mes4;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]`,
});
client.awaitedCommand({
  name: "right2d",
  code: `$awaitMessages[1219977149793042483;$getGlobalUserVar[player];25s;left,middle,right;left2,middle2,right2;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[player]]
$setGlobalUserVar[defend2;right;$getGlobalUserVar[player]]
  $setGlobalUserVar[defend2;right]
  $deleteMessage[$getGlobalUserVar[mes3]] You Have Defended the Ball into right side of it. Please wait for the Striker move 
$setGlobalUserVar[mes4;$getGlobalUserVar[mes4];$getGlobalUserVar[player]]
$setGlobalUserVar[mes4;$sendDm[Kick The Ball
https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[player];true]]`,
});
client.awaitedCommand({
  name: "left3d",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left3,middle3,right3;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
  $setGlobalUserVar[mes6;$sendDm[Kick The Ball https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
  $deleteMessage[$getGlobalUserVar[mes5]] You Have Defended the Ball into left side of it. Please wait for the Striker move
$setGlobalUserVar[defend3;left;$getGlobalUserVar[opp]]
$setGlobalUserVar[defend3;left]
  
  `,
});
client.awaitedCommand({
  name: "middle3d",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left3,middle3,right3;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
  $setGlobalUserVar[mes6;$sendDm[Kick The Ball https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
  $deleteMessage[$getGlobalUserVar[mes5]] You Have Defended the Ball into middle side of it. Please wait for the Striker move
$setGlobalUserVar[defend3;middle;$getGlobalUserVar[opp]]
$setGlobalUserVar[defend3;middle]
  `,
});
client.awaitedCommand({
  name: "right3d",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[opp];25s;left,middle,right;left3,middle3,right3;{execute:yeetp} Times up! Please yeet the match and try again;{};$getGlobalUserVar[opp]]
  $setGlobalUserVar[mes6;$sendDm[Kick The Ball https://media.discordapp.net/attachments/1227994617950113812/1230044524341104721/965371725745377320.gif?;$getGlobalUserVar[opp];true]]
  $deleteMessage[$getGlobalUserVar[mes5]] You Have Defended the Ball into right side of it. Please wait for the Striker move
$setGlobalUserVar[defend3;right;$getGlobalUserVar[opp]]
$setGlobalUserVar[defend3;right]
  `,
});
client.awaitedCommand({
  name: "yeetp",
  code: `
  $setGlobalUserVar[yeet;true;$getGlobalUserVar[player]] 
$setGlobalUserVar[yeet;true;$getGlobalUserVar[opp]]
$channelSendMessage[$getGlobalUserVar[channel];player went afk now you can yeet the match]`,
});
client.command({
  name: "yeet",
  code: `Match has been Abonded :thumbsup:
  $setGlobalUserVar[yeet;false;$get[player]]
  $setGlobalUserVar[yeet;false;$get[opp]]
$setGlobalUserVar[kick1;middle;$get[opp]]
$setGlobalUserVar[defend1;middle;$get[opp]]
$setGlobalUserVar[kick2;middle;$get[opp]]
$setGlobalUserVar[defend2;middle;$get[opp]]
$setGlobalUserVar[kick3;middle;$get[opp]]
$setGlobalUserVar[defend3;middle;$get[opp]]
$setGlobalUserVar[channel;;$get[opp]]
$setGlobalUserVar[server;;$get[opp]]
$setGlobalUserVar[main;;$get[opp]]
$setGlobalUserVar[stats1;Ongoing;$get[opp]]
$setGlobalUserVar[stats2;Ongoing;$get[opp]]
$setGlobalUserVar[stats3;Ongoing;$get[opp]]
$setGlobalUserVar[mes6;;$get[opp]]
$setGlobalUserVar[mes5;;$get[opp]]
$setGlobalUserVar[mes4;;$get[opp]]
$setGlobalUserVar[mes3;;$get[opp]]
$setGlobalUserVar[mes2;;$get[opp]]
$setGlobalUserVar[mes1;;$get[opp]]
$setGlobalUserVar[oppn;;$get[opp]]
$setGlobalUserVar[playern;;$get[opp]]
$setGlobalUserVar[opps;0;$get[opp]]
$setGlobalUserVar[players;0;$get[opp]]
$setGlobalUserVar[opp;;$get[opp]]
$setGlobalUserVar[player;;$get[opp]]
  $setGlobalUserVar[kick1;middle;$get[player]]
  $setGlobalUserVar[defend1;middle;$get[player]]
  $setGlobalUserVar[kick2;middle;$get[player]]
  $setGlobalUserVar[defend2;middle;$get[player]]
  $setGlobalUserVar[kick3;middle;$get[player]]
  $setGlobalUserVar[defend3;middle;$get[player]]
  $setGlobalUserVar[channel;;$get[player]]
  $setGlobalUserVar[server;;$get[player]]
  $setGlobalUserVar[main;;$get[player]]
  $setGlobalUserVar[stats1;Ongoing;$get[player]]
  $setGlobalUserVar[stats2;Ongoing;$get[player]]
  $setGlobalUserVar[stats3;Ongoing;$get[player]]
  $setGlobalUserVar[mes6;;$get[player]]
  $setGlobalUserVar[mes5;;$get[player]]
  $setGlobalUserVar[mes4;;$get[player]]
  $setGlobalUserVar[mes3;;$get[player]]
  $setGlobalUserVar[mes2;;$get[player]]
  $setGlobalUserVar[mes1;;$get[player]]
  $setGlobalUserVar[oppn;;$get[player]]
  $setGlobalUserVar[playern;;$get[player]]
  $setGlobalUserVar[opps;0;$get[player]]
  $setGlobalUserVar[players;0;$get[player]]
  $setGlobalUserVar[opp;$get[player]]
  $setGlobalUserVar[player;;$get[player]]
  $let[player;$getGlobalUserVar[player]]  
  $let[opp;$getGlobalUserVar[opp]] 
$editMessage[$getGlobalUserVar[main];{newEmbed:{title: Classic Match}{description:**$getGlobalUserVar[playern] ** $getGlobalUserVar[players] - $getGlobalUserVar[opps] **$getGlobalUserVar[oppn]**
Stats-
**Match Abonded**}{image:https://media.discordapp.net/attachments/1094425576107946185/1230510259580178502/cancelled-rugby-match-american-football-event-due-coronavirus-covid-176120826.png?}};$getGlobalUserVar[channel]]
$onlyIf[$getGlobalUserVar[yeet]==true;The Match cant be yeeted]
  $onlyIf[$getGlobalUserVar[match]==true;You are not in any match!]
  `,
}); // yeet
client.command({
  name: "us",
  code: `$title[1;$username[$authorID] Stats]
  $description[1;**Bio** - \`\`$getGlobalUserVar[bio]\`\`]
  $addField[Saves;\`\`$getGlobalUserVar[saves]\`\`;true]
$addField[Attempts;\`\`$getGlobalUserVar[attempts]\`\`;true]
$addField[Goals;\`\`$getGlobalUserVar[goals]\`\`;true]
$addField[Tie;\`\`$getGlobalUserVar[tie]\`\`;true]
$addField[Won;\`\`$getGlobalUserVar[won]\`\`;true]
  $addField[Matches;\`\`$getGlobalUserVar[matches]\`\`;true]
  $thumbnail[$userAvatar[$authorID]]
  `,
}); // us
client.command({
  name: "daily",
  code: `$title[1;Daily Rewards:]
  $description[1;**5000 <:SR:1094531145699442718> Transacted to your balance**

  Join Soccer Realm [Click Here](https://discord.gg/PB4S2JX7B5) And Be a Part of Our Amazing Community
  ]
  $addField[Balance; \`\`$getGlobalUserVar[srcoins]\`\`]
  $setGlobalUserVar[srcoins;$sum[$getGlobalUserVar[srcoins];5000]]
  $color[Blue]
  $globalCooldown[24h;{newEmbed:{author:Soccer Realm:https://media.discordapp.net/attachments/1094319847355207710/1114753176986464326/Screenshot_20230604_084059_Discord.jpg}{title:Cool down!}{description:Hey You Need to wait %time% more to use the command again. }{footer:Join our Support Server for Giveaways and Any further support}{color:Blue}}]`,
}); // daily
client.command({
  name: "balance",
  aliases: ["bal"],
  code: `$title[1;$username[$authorID]'s Wallet]
    $description[1;Your Current Balance is \`\`$getGlobalUserVar[srcoins]\`\` <:SR:1094531145699442718>]
    $color[Blue]
    `,
}); // balance
client.command({
  name: "do",
  code: `\`\`\`$eval[$message;false;true;true;true]\`\`\`

`,
}); // do
client.command({
  name: "ccaptain",
  aliases: ["cc"],
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team A by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;1,3,5,7,9;p1,p3,p5,p7,p9;The Host didnt responded , try again later]
  `,
});
client.awaitedCommand({
  name: "p1",
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team B by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;2,4,6,8,10;p2,p4,p6,p8,p10;The Host didnt responded , try again later]
$setGlobalUserVar[ecaptaina;$getGlobalUserVar[eplayer1;$getGlobalUserVar[host]];$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p3",
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team B by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;2,4,6,8,10;p2,p4,p6,p8,p10;The Host didnt responded , try again later]
$setGlobalUserVar[ecaptaina;$getGlobalUserVar[eplayer3;$getGlobalUserVar[host]];$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p5",
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team B by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;2,4,6,8,10;p2,p4,p6,p8,p10;The Host didnt responded , try again later]
$setGlobalUserVar[ecaptaina;$getGlobalUserVar[eplayer5;$getGlobalUserVar[host]];$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p7",
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team B by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;2,4,6,8,10;p2,p4,p6,p8,p10;The Host didnt responded , try again later]
$setGlobalUserVar[ecaptaina;$getGlobalUserVar[eplayer7;$getGlobalUserVar[host]];$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p9",
  code: `$channelSendMessage[$channelID;<@$getGlobalUserVar[host]> Please Choose a captain for team B by sending their positions without prefix;false]
$awaitMessages[$channelID;$getGlobalUserVar[host];15s;2,4,6,8,10;p2,p4,p6,p8,p10;The Host didnt responded , try again later]
$setGlobalUserVar[ecaptaina;$getGlobalUserVar[eplayer9;$getGlobalUserVar[host]];$getGlobalUserVar[host]] `,
});
client.awaitedCommand({
  name: "p2",
  code: `$channelSendMessage[$channelID;**Team A** Captain - $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]
**Team B** Captain - $username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];false]]
$setGlobalUserVar[ecaptainb;$getGlobalUserVar[eplayer2;$getGlobalUserVar[host]];$getGlobalUserVar[host]] $setGlobalUserVar[ecaptain;true;$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p4",
  code: `$channelSendMessage[$channelID;**Team A** Captain - $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]
  **Team B** Captain - $username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];false]]
  $setGlobalUserVar[ecaptainb;$getGlobalUserVar[eplayer4;$getGlobalUserVar[host]];$getGlobalUserVar[host]] $setGlobalUserVar[ecaptain;true;$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p6",
  code: `$channelSendMessage[$channelID;**Team A** Captain - $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]
  **Team B** Captain - $username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];false]]
  $setGlobalUserVar[ecaptainb;$getGlobalUserVar[eplayer6;$getGlobalUserVar[host]];$getGlobalUserVar[host]] $setGlobalUserVar[ecaptain;true;$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p8",
  code: `$channelSendMessage[$channelID;**Team A** Captain - $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]
  **Team B** Captain - $username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];false]]
  $setGlobalUserVar[ecaptainb;$getGlobalUserVar[eplayer8;$getGlobalUserVar[host]];$getGlobalUserVar[host]] $setGlobalUserVar[ecaptain;true;$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "p10",
  code: `$channelSendMessage[$channelID;**Team A** Captain - $username[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]]
  **Team B** Captain - $username[$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];false]]
  $setGlobalUserVar[ecaptainb;$getGlobalUserVar[eplayer10;$getGlobalUserVar[host]];$getGlobalUserVar[host]]
  $setGlobalUserVar[ecaptain;true;$getGlobalUserVar[host]]`,
});
client.command({
  name: "reset",
  code: `$executionTime MS
  $setGlobalUserVar[eteambs;0]
  $setGlobalUserVar[eteamas;0]
  $setGlobalUserVar[ecaptaina;]
  $setGlobalUserVar[ecaptainb;]
    $setGlobalUserVar[match;false]
$setGlobalUserVar[player;]
$setGlobalUserVar[opp;]
$setGlobalUserVar[kick1;middle]
$setGlobalUserVar[defend1;middle]
$setGlobalUserVar[kick2;middle]
$setGlobalUserVar[defend2;middle]
$setGlobalUserVar[kick3;middle]
$setGlobalUserVar[defend3;middle]
$setGlobalUserVar[players;0]
$setGlobalUserVar[opps;0]
$setGlobalUserVar[playern;player1]
$setGlobalUserVar[oppn;player2]
$setGlobalUserVar[mes1;]
$setGlobalUserVar[mes2;]
$setGlobalUserVar[mes3;]
$setGlobalUserVar[mes4;]
$setGlobalUserVar[mes5;]
$setGlobalUserVar[mes6;]
$setGlobalUserVar[main;]
$setGlobalUserVar[channel;]
$setGlobalUserVar[server;]
$setGlobalUserVar[stats1;onGoing]
$setGlobalUserVar[stats2;onGoing]
$setGlobalUserVar[stats3;onGoing]
$setGlobalUserVar[saves;0]
$setGlobalUserVar[attempts;0]
$setGlobalUserVar[winstreak;0]
$setGlobalUserVar[matches;0]
$setGlobalUserVar[won;0]
$setGlobalUserVar[tie;0]
$setGlobalUserVar[bio;Foot Ball Is My Fav <3]
$setGlobalUserVar[goals;0]
$setGlobalUserVar[srcoins;0]
$setGlobalUserVar[echannel;id]
$setGlobalUserVar[eplayer1;id]
$setGlobalUserVar[eplayer2;id]
$setGlobalUserVar[eplayer3;id]
$setGlobalUserVar[eplayer4;id]
$setGlobalUserVar[eplayer5;id]
$setGlobalUserVar[eplayer6;id]
$setGlobalUserVar[eplayer7;id]
$setGlobalUserVar[eplayer8;id]
$setGlobalUserVar[eplayer9;id]
$setGlobalUserVar[eplayer10;id]
$setGlobalUserVar[eplayer1n;player1]
$setGlobalUserVar[eplayer2n;player2]
$setGlobalUserVar[eplayer3n;player3]
$setGlobalUserVar[eplayer4n;player4]
$setGlobalUserVar[eplayer5n;player5]
$setGlobalUserVar[eplayer6n;player6]
$setGlobalUserVar[eplayer7n;player7]
$setGlobalUserVar[eplayer8n;player8]
$setGlobalUserVar[eplayer9n;player9]
$setGlobalUserVar[eplayer10n;player10]
$setGlobalUserVar[playercount;0]
$setGlobalUserVar[echoose1;]
$setGlobalUserVar[echoose2;]
$setGlobalUserVar[echoose3;]
$setGlobalUserVar[echoose4;]
$setGlobalUserVar[echoose5;]
$setGlobalUserVar[echoose6;]
$setGlobalUserVar[echoose7;]
$setGlobalUserVar[echoose8;]
$setGlobalUserVar[echoose9;]
$setGlobalUserVar[echoose10;]
$setGlobalUserVar[ordera;]
$setGlobalUserVar[orderb;]
$setGlobalUserVar[akick1;middle]
$setGlobalUserVar[akick2;middle]
$setGlobalUserVar[akick3;middle]
$setGlobalUserVar[akick4;middle]
$setGlobalUserVar[akick5;middle]
$setGlobalUserVar[bdefend1;middle]
$setGlobalUserVar[bdefend2;middle]
$setGlobalUserVar[bdefend3;middle]
$setGlobalUserVar[bdefend4;middle]
$setGlobalUserVar[bdefend5;middle]
$setGlobalUserVar[adefend1;middle]
$setGlobalUserVar[adefend2;middle]
$setGlobalUserVar[adefend3;middle]
$setGlobalUserVar[adefend4;middle]
$setGlobalUserVar[adefend5;middle]
$setGlobalUserVar[bkick1;middle]
$setGlobalUserVar[bkick2;middle]
$setGlobalUserVar[bkick3;middle]
$setGlobalUserVar[bkick4;middle]
$setGlobalUserVar[bkick5;middle]
$setGlobalUserVar[estats1;onGoing]
$setGlobalUserVar[estats2;onGoing]
$setGlobalUserVar[estats3;onGoing]
$setGlobalUserVar[estats4;onGoing]
$setGlobalUserVar[estats5;onGoing]
$setGlobalUserVar[estats6;onGoing]
$setGlobalUserVar[estats7;onGoing]
$setGlobalUserVar[estats8;onGoing]
$setGlobalUserVar[estats9;onGoing]
$setGlobalUserVar[estats10;onGoing]
$setGlobalUserVar[host;id]
$setGlobalUserVar[ecaptaina;]
$setGlobalUserVar[ecaptainb;]
$setGlobalUserVar[ecaptain;false]
$setGlobalUserVar[etoss;false]
$setGlobalUserVar[etossrandom;t]
  $setGlobalUserVar[eteamaname;Team A]
  $setGlobalUserVar[eteambname;Team B]
  $setGlobalUserVar[emessage;]
`,
}); // reset
client.command({
  name: "toss",
  aliases: ["t"],
  code: `$channelSendMessage[$channelID;{newEmbed:{title:Toss}{description: <@$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]> Please choose h/t}{footer:Prefixless}{image:https://media.discordapp.net/attachments/1094425576107946185/1232953474799370250/20220124-The18-Image-Coin-Toss-GettyImages-1326675139.png?}};false]
$awaitMessages[$channelID;$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]];15s;h,t;heads,tails;The Team A Captain didnt responded try again later]
$setGlobalUserVar[etossrandom;$randomText[h;t];$getGlobalUserVar[host]]
$onlyIf[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]==$authorID;Team A captain need to choose the toss]
$onlyIf[$getGlobalUserVar[etoss;$getGlobalUserVar[host]]==false;Already toss has done!]
  `,
}); // toss
client.awaitedCommand({
  name: "heads",
  code: `$setGlobalUserVar[etoss;true;$getGlobalUserVar[host]]
  $channelSendMessage[$channelID;{newEmbed:{title:Toss}{description: $if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==h;<@$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]> you won the toss and start the game by kick off;<@$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]]> you won the toss and start the game by kick off]}}]
  $setGlobalUserVar[etosslooser;$if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==h;b;a];$getGlobalUserVar[host]]
$setGlobalUserVar[etosswinner;$if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==h;a;b];$getGlobalUserVar[host]]`,
});
client.awaitedCommand({
  name: "tails",
  code: `$setGlobalUserVar[etoss;true;$getGlobalUserVar[host]]
  $channelSendMessage[$channelID;{newEmbed:{title:Toss}{description: $if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==t;<@$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]]> you won the toss and start the game by kick off;<@$getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]]> you won the toss and start the game by kick off]}}]
  $setGlobalUserVar[etosslooser;$if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==t;b;a];$getGlobalUserVar[host]]
$setGlobalUserVar[etosswinner;$if[$getGlobalUserVar[etossrandom;$getGlobalUserVar[host]]==t;a;b];$getGlobalUserVar[host]]`,
});
// ;$getGlobalUserVar[host]
client.command({
  name: "start",
  aliases: ["s"],
  code: `
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[echoose10;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose9;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose8;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose7;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose6;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose5;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose4;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose3;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose2;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose1;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1]n];$getGlobalUserVar[host]]
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft1,eright1;{execute:eafk1} You were afk this shot]
  $setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[emessage;$channelSendMessage[$channelID;{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s]\`\`}{field:$getGlobalUserVar[eteamaname]::true}{field:$getGlobalUserVar[eteambname]::true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}};true]]
$onlyIf[$getGlobalUserVar[ecaptain;$getGlobalUserVar[host]]==true;Please choose captains first]
$onlyIf[$getGlobalUserVar[etoss;$getGlobalUserVar[host]]==true;Toss has not done!]
$onlyIf[$getGlobalUserVar[echannel]==$channelID;You cant start a game in another channel]
  $onlyIf[$getGlobalUserVar[host]==$authorID;You are not host of the match]
  $onlyIf[$getGlobalUserVar[match]==true;your are not in any match]
  `,
}); // start
// 1219977149793042483;$authorID;25s;left,middle,right;left1d,middle1d,right1d;{execute:yeetp} Times up! Please yeet the match and try again;{};$authorID
client.awaitedCommand({
  name: "eleft1",
  code: `
$awaitMessages[1219977149793042483;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft1,edright1;{execute:edafk1} You were afk this shot;{};$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 1 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;left;$getGlobalUserVar[host]]
  `,
}); // left1
client.awaitedCommand({
  name: "eright1",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft1,edright1;{execute:edafk1} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 1 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;right;$getGlobalUserVar[host]]`,
}); // right1
client.awaitedCommand({
  name: "eafk1",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft1,edright1;{execute:edafk1} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 1 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk1
client.awaitedCommand({
  name: "edleft1",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft2,eright2;{execute:eafk2} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats2;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats1;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;left;$getGlobalUserVar[host]]
  `,
}); // dleft1
client.awaitedCommand({
  name: "edright1",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft2,eright2;{execute:eafk2} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats2;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats1;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;right;$getGlobalUserVar[host]]
`,
}); // dright1
client.awaitedCommand({
  name: "edafk1",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft2,eright2;{execute:eafk2} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats2;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats1;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend1;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk1
client.awaitedCommand({
  name: "eleft2",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft2,edright2;{execute:edafk2} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 2 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;left;$getGlobalUserVar[host]]
  `,
}); // left2
client.awaitedCommand({
  name: "eright2",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft2,edright2;{execute:edafk2} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 2 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;right;$getGlobalUserVar[host]]`,
}); // right2
client.awaitedCommand({
  name: "eafk2",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft2,edright2;{execute:edafk2} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 2 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk2
client.awaitedCommand({
  name: "edleft2",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft3,eright3;{execute:eafk3} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats4;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats3;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose3;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;left;$getGlobalUserVar[host]]`,
}); // dleft2
client.awaitedCommand({
  name: "edright2",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft3,eright3;{execute:eafk3} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats4;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats3;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose3;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;right;$getGlobalUserVar[host]]`,
}); // dright2
client.awaitedCommand({
  name: "edafk2",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft3,eright3;{execute:eafk3} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats4;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats3;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend2;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk2
client.awaitedCommand({
  name: "eleft3",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft3,edright3;{execute:edafk3} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 3 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;left;$getGlobalUserVar[host]]
  `,
}); // left3
client.awaitedCommand({
  name: "eright3",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft3,edright3;{execute:edafk3} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 3 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;right;$getGlobalUserVar[host]]`,
}); // right3
client.awaitedCommand({
  name: "eafk3",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft3,edright3;{execute:edafk3} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 3 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk3
client.awaitedCommand({
  name: "edleft3",
  code: ` $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft4,eright4;{execute:eafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats6;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats5;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;left;$getGlobalUserVar[host]]`,
}); // dleft3
client.awaitedCommand({
  name: "edright3",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft4,eright4;{execute:eafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats6;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats5;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;right;$getGlobalUserVar[host]]`,
}); // dright3
client.awaitedCommand({
  name: "edafk3",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft4,eright4;{execute:eafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats6;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats5;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend3;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk3
client.awaitedCommand({
  name: "eleft4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft4,edright4;{execute:edafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 4 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;left;$getGlobalUserVar[host]]
  `,
}); // left4
client.awaitedCommand({
  name: "eright4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft4,edright4;{execute:edafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 4 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;right;$getGlobalUserVar[host]]`,
}); // right4
client.awaitedCommand({
  name: "eafk4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft4,edright4;{execute:edafk4} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 4 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk4
client.awaitedCommand({
  name: "edleft4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft5,eright5;{execute:eafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats8;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats7;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;left;$getGlobalUserVar[host]]`,
}); // dleft4
client.awaitedCommand({
  name: "edright4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft5,eright5;{execute:eafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats8;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats7;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;right;$getGlobalUserVar[host]]`,
}); // dright4
client.awaitedCommand({
  name: "edafk4",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft5,eright5;{execute:eafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats8;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats7;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk4
client.awaitedCommand({
  name: "eleft5",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft5,edright5;{execute:edafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 5 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;left;$getGlobalUserVar[host]]
  `,
}); // left5
client.awaitedCommand({
  name: "eright5",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft5,edright5;{execute:edafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 5 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;right;$getGlobalUserVar[host]]`,
}); // right5
client.awaitedCommand({
  name: "eafk5",
  code: `$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft5,edright5;{execute:edafk5} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 5 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk5
client.awaitedCommand({
  name: "edleft5",
  code: `
$awaitMessages[$channelID;973550764695879680;10s;halftime;halftime;{execute:2ndhalf} Second Half]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]
$getGlobalUserVar[estats9;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]
$getGlobalUserVar[estats10;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1237999056999944201/images.png?}{footer:Short Break}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats10;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats9;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;left;$getGlobalUserVar[host]]`,
}); // dleft5
client.awaitedCommand({
  name: "edright5",
  code: `$awaitMessages[$channelID;973550764695879680;10s;halftime;halftime;{execute:2ndhalf} Second Half]

$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]
$getGlobalUserVar[estats9;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]
$getGlobalUserVar[estats10;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1237999056999944201/images.png?}{footer:Short Break}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats10;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats9;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;right;$getGlobalUserVar[host]]`,
}); //dright5
client.awaitedCommand({
  name: "edafk5",
  code: `$awaitMessages[$channelID;973550764695879680;10s;halftime;halftime;{execute:2ndhalf} Second Half]

$editMessage[$getGlobalUserVar[emessage;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats1;$getGlobalUserVar[host]]
$getGlobalUserVar[estats3;$getGlobalUserVar[host]]
$getGlobalUserVar[estats5;$getGlobalUserVar[host]]
$getGlobalUserVar[estats7;$getGlobalUserVar[host]]
$getGlobalUserVar[estats9;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats2;$getGlobalUserVar[host]]
$getGlobalUserVar[estats4;$getGlobalUserVar[host]]
$getGlobalUserVar[estats6;$getGlobalUserVar[host]]
$getGlobalUserVar[estats8;$getGlobalUserVar[host]]
$getGlobalUserVar[estats10;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1237999056999944201/images.png?}{footer:Short Break}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats10;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats9;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]defend5;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk5
client.awaitedCommand({
  name: "halftime",
  code: `There is an **error** in the code please tell this in support server`,
});
client.awaitedCommand({
  name: "2ndhalf",
  code: `
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft6,eright6;{execute:eafk6} You were afk this shot]
$setGlobalUserVar[echoose10;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose9;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose8;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose7;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose6;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose5;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose4;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose3;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose2;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1]n];$getGlobalUserVar[host]]
$setGlobalUserVar[echoose1;$getGlobalUserVar[eplayer$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1]n];$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[emessage1;$channelSendMessage[$channelID;{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteamaname]::true}{field:$getGlobalUserVar[eteambname]::true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}};true];$getGlobalUserVar[host]]
  `,
}); // 2nd half
client.awaitedCommand({
  name: "eleft6",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft6,edright6;{execute:edafk6} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 6 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;left;$getGlobalUserVar[host]]
  `,
}); // left6
client.awaitedCommand({
  name: "eright6",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft6,edright6;{execute:edafk6} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 6 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;right;$getGlobalUserVar[host]]`,
}); // right6
client.awaitedCommand({
  name: "eafk6",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft6,edright6;{execute:edafk6} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 6 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;1];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk6
client.awaitedCommand({
  name: "edleft6",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft7,eright7;{execute:eafk7} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats12;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats11;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;left;$getGlobalUserVar[host]]
  `,
}); // dleft6
client.awaitedCommand({
  name: "edright6",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft7,eright7;{execute:eafk7} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats12;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats11;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;right;$getGlobalUserVar[host]]
`,
}); // dright6
client.awaitedCommand({
  name: "edafk6",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft7,eright7;{execute:eafk7} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats12;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats11;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose2;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick1;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose1;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend1;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk6
client.awaitedCommand({
  name: "eleft7",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft7,edright7;{execute:edafk7} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 7 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;left;$getGlobalUserVar[host]]
  `,
}); // left7
client.awaitedCommand({
  name: "eright7",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft7,edright7;{execute:edafk7} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 7 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;right;$getGlobalUserVar[host]]`,
}); // right7
client.awaitedCommand({
  name: "eafk7",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft7,edright7;{execute:edafk7} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 7 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;2];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk7
client.awaitedCommand({
  name: "edleft7",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft8,eright8;{execute:eafk8} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats14;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats13;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose3;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;left;$getGlobalUserVar[host]]
  `,
}); // dleft7
client.awaitedCommand({
  name: "edright7",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft8,eright8;{execute:eafk8} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats14;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats13;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose3;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;right;$getGlobalUserVar[host]]
`,
}); // dright7
client.awaitedCommand({
  name: "edafk7",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft8,eright8;{execute:eafk8} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats14;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats13;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose4;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick2;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose3;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend2;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk7
client.awaitedCommand({
  name: "eleft8",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft8,edright8;{execute:edafk8} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 8 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;left;$getGlobalUserVar[host]]
  `,
}); // left8
client.awaitedCommand({
  name: "eright8",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft8,edright8;{execute:edafk8} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 8 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;right;$getGlobalUserVar[host]]`,
}); // right8
client.awaitedCommand({
  name: "eafk8",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft8,edright8;{execute:edafk8} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 8 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;3];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk8
client.awaitedCommand({
  name: "edleft8",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft9,eright9;{execute:eafk9} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats16;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats15;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;left;$getGlobalUserVar[host]]
  `,
}); // dleft8
client.awaitedCommand({
  name: "edright8",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft9,eright9;{execute:eafk9} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats16;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats15;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;right;$getGlobalUserVar[host]]
`,
}); // dright8
client.awaitedCommand({
  name: "edafk8",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft9,eright9;{execute:eafk9} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats16;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats15;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose6;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose5;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk8
client.awaitedCommand({
  name: "eleft9",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft9,edright9;{execute:edafk9} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 9 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;left;$getGlobalUserVar[host]]
  `,
}); // left9
client.awaitedCommand({
  name: "eright9",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft9,edright9;{execute:edafk9} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 9 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;right;$getGlobalUserVar[host]]`,
}); // right9
client.awaitedCommand({
  name: "eafk9",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft9,edright9;{execute:edafk9} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 9 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;4];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk9
client.awaitedCommand({
  name: "edleft9",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft10,eright10;{execute:eafk10} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats18;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats17;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;left;$getGlobalUserVar[host]]
  `,
}); // dleft9
client.awaitedCommand({
  name: "edright9",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft10,eright10;{execute:eafk10} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right 
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats18;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats17;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;right;$getGlobalUserVar[host]]
`,
}); // dright9
client.awaitedCommand({
  name: "edafk9",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;eleft10,eright10;{execute:eafk10} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> left or right
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/663324452934778880/884138106054410330/ezgif-2-bbcdc7e2595f.gif?}{footer:Please Check Dms}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats18;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats17;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose8;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick4;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose7;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend4;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk9
client.awaitedCommand({
  name: "eleft10",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft10,edright10;{execute:edafk10} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 10 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;left;$getGlobalUserVar[host]]
  `,
}); // left10
client.awaitedCommand({
  name: "eright10",
  code: `
$awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft10,edright10;{execute:edafk10} You were afk this shot]
<@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 10 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;right;$getGlobalUserVar[host]]`,
}); // right10
client.awaitedCommand({
  name: "eafk10",
  code: `  $awaitMessages[$channelID;$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]];30s;left,right;edleft10,edright10;{execute:edafk10} You were afk this shot]
  <@$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]]> defend 10 left or right $getGlobalUserVar[current;$getGlobalUserVar[host]]
$setGlobalUserVar[current;$advancedTextSplit[$getGlobalUserVar[order$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]];$getGlobalUserVar[host]];|;5];$getGlobalUserVar[host]]
$setGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // eafk10
client.awaitedCommand({
  name: "edleft10",
  code: `
$attachCanvas[avatar] 
$fillText[avatar;$get[as];white;60px Baloo-Regular;280;230]
$fillText[avatar;$get[bs];white;60px Baloo-Regular;410;230]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238805124344713316/image_2024-05-11_161859032-removebg-preview.png?ex=66409ead&is=663f4d2d&hm=c329d651f30acff78fc18cc516702a5eff4ea8e8114da910be23233dff218d7e&=&format=webp&quality=lossless];94;153;165;120]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238751568447148063/image_2024-05-11_124408023-removebg-preview.png?ex=66406ccc&is=663f1b4c&hm=372620cf5a20425ebc6d259460b5c44f893f097603512e2052259691c76aed2e&=&format=webp&quality=lossless];478;162;160;100]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094319847355207710/1238728858749108266/kxt-match-scores-result-template-free-editor-online_1.jpg?ex=664057a6&is=663f0626&hm=9909915742d6ee3d608b04ab7c949905599fc11db8b2a1c99eaba4c689d45e27&=&format=webp];0;0;730;411]
$createCanvas[avatar;730;411]
$let[as;$getGlobalUserVar[eplayeras;$getGlobalUserVar[host]]]
$let[bs;$getGlobalUserVar[eplayerbs;$getGlobalUserVar[host]]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]
$getGlobalUserVar[estats19;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]
$getGlobalUserVar[estats20;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1238396728508547072/image.png?}{footer:Full Time}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats20;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats19;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick3;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend3;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;left;$getGlobalUserVar[host]]
  `,
}); // dleft10
client.awaitedCommand({
  name: "edright10",
  code: `
$attachCanvas[avatar] 
$fillText[avatar;$get[as];white;60px Baloo-Regular;280;230]
$fillText[avatar;$get[bs];white;60px Baloo-Regular;410;230]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238805124344713316/image_2024-05-11_161859032-removebg-preview.png?ex=66409ead&is=663f4d2d&hm=c329d651f30acff78fc18cc516702a5eff4ea8e8114da910be23233dff218d7e&=&format=webp&quality=lossless];94;153;165;120]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238751568447148063/image_2024-05-11_124408023-removebg-preview.png?ex=66406ccc&is=663f1b4c&hm=372620cf5a20425ebc6d259460b5c44f893f097603512e2052259691c76aed2e&=&format=webp&quality=lossless];478;162;160;100]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094319847355207710/1238728858749108266/kxt-match-scores-result-template-free-editor-online_1.jpg?ex=664057a6&is=663f0626&hm=9909915742d6ee3d608b04ab7c949905599fc11db8b2a1c99eaba4c689d45e27&=&format=webp];0;0;730;411]
$createCanvas[avatar;730;411]
$let[as;$getGlobalUserVar[eplayeras;$getGlobalUserVar[host]]]
$let[bs;$getGlobalUserVar[eplayerbs;$getGlobalUserVar[host]]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]
$getGlobalUserVar[estats19;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]
$getGlobalUserVar[estats20;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1238396728508547072/image.png?}{footer:Full Time}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]

$setGlobalUserVar[estats20;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats19;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;right;$getGlobalUserVar[host]]
`,
}); // dright10
client.awaitedCommand({
  name: "edafk10",
  code: `
$attachCanvas[avatar] 
$fillText[avatar;$get[as];white;60px Baloo-Regular;280;230]
$fillText[avatar;$get[bs];white;60px Baloo-Regular;410;230]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238805124344713316/image_2024-05-11_161859032-removebg-preview.png?ex=66409ead&is=663f4d2d&hm=c329d651f30acff78fc18cc516702a5eff4ea8e8114da910be23233dff218d7e&=&format=webp&quality=lossless];94;153;165;120]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238751568447148063/image_2024-05-11_124408023-removebg-preview.png?ex=66406ccc&is=663f1b4c&hm=372620cf5a20425ebc6d259460b5c44f893f097603512e2052259691c76aed2e&=&format=webp&quality=lossless];478;162;160;100]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094319847355207710/1238728858749108266/kxt-match-scores-result-template-free-editor-online_1.jpg?ex=664057a6&is=663f0626&hm=9909915742d6ee3d608b04ab7c949905599fc11db8b2a1c99eaba4c689d45e27&=&format=webp];0;0;730;411]
$createCanvas[avatar;730;411]
$let[as;$getGlobalUserVar[eplayeras;$getGlobalUserVar[host]]]
$let[bs;$getGlobalUserVar[eplayerbs;$getGlobalUserVar[host]]]
$editMessage[$getGlobalUserVar[emessage1;$getGlobalUserVar[host]];{newEmbed:{title:Elite Mode}{description:**Score**: \`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`-\`\`$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]\`\`}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats11;$getGlobalUserVar[host]]
$getGlobalUserVar[estats13;$getGlobalUserVar[host]]
$getGlobalUserVar[estats15;$getGlobalUserVar[host]]
$getGlobalUserVar[estats17;$getGlobalUserVar[host]]
$getGlobalUserVar[estats19;$getGlobalUserVar[host]]:true}{field:$getGlobalUserVar[eteam$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]name]:$getGlobalUserVar[estats12;$getGlobalUserVar[host]]
$getGlobalUserVar[estats14;$getGlobalUserVar[host]]
$getGlobalUserVar[estats16;$getGlobalUserVar[host]]
$getGlobalUserVar[estats18;$getGlobalUserVar[host]]
$getGlobalUserVar[estats20;$getGlobalUserVar[host]]:true}{image:https://media.discordapp.net/attachments/1094425576107946185/1238396728508547072/image.png?}{footer:Full Time}}]
$setGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]];$math[$getGlobalUserVar[eplayer$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]s;$getGlobalUserVar[host]]+1]];$getGlobalUserVar[host]]
$setGlobalUserVar[estats20;$get[wh1];$getGlobalUserVar[host]]
$setGlobalUserVar[estats19;$get[wh];$getGlobalUserVar[host]]
$let[wh1;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];:gloves: $getGlobalUserVar[echoose10;$getGlobalUserVar[host]];]]
$let[wh;$if[$getGlobalUserVar[$getGlobalUserVar[etosslooser;$getGlobalUserVar[host]]kick5;$getGlobalUserVar[host]]==$getGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$getGlobalUserVar[host]];;⚽ $getGlobalUserVar[echoose9;$getGlobalUserVar[host]]]]
$setGlobalUserVar[$getGlobalUserVar[etosswinner;$getGlobalUserVar[host]]defend5;$randomText[left;right];$getGlobalUserVar[host]]
$channelSendMessage[$getGlobalUserVar[echannel;$getGlobalUserVar[host]];{newEmbed:{title:aFk}{description:$getGlobalUserVar[eplayer$getGlobalUserVar[current;$getGlobalUserVar[host]];$getGlobalUserVar[host]] went afk this shot}}]
  `,
}); // edafk10
client.command({
  name: "cplayers",
  aliases: ["cp"],
  code: `$channelSendMessage[$channelID;You have sucefully choosen your player order as $message[1] $message[2] $message[3] $message[4] $message[5]] 
  $setGlobalUserVar[order$get[who];$message[1]|$message[2]|$message[3]|$message[4]|$message[5];$getGlobalUserVar[host]]
  $let[who;$if[$authorID==$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]];a;b]]
$onlyIf[$checkContains[$getGlobalUserVar[ecaptaina;$getGlobalUserVar[host]] | $getGlobalUserVar[ecaptainb;$getGlobalUserVar[host]];$authorID]==true;You are not captain of any team in this match]
  `,
}); // cp
client.command({
  name: "set",
  code: `
  $setGlobalUserVar[eplayer2n;beta_yg]
  $setGlobalUserVar[eplayer2;853192951110828043]
  $setGlobalUserVar[eplayer3n;hyun3407]
  $setGlobalUserVar[eplayer3;853268806855426068]
  $setGlobalUserVar[eplayer4n;lunatic._.fringe]
  $setGlobalUserVar[eplayer4;743633216384008242]
  $setGlobalUserVar[eplayer5n;pony.__.]
  $setGlobalUserVar[eplayer5;832622639754903582]
  $setGlobalUserVar[eplayer6n;delfia0463]
  $setGlobalUserVar[eplayer6;824980180497072168]
  $setGlobalUserVar[eplayer7n;alphaguy0385]
  $setGlobalUserVar[eplayer7;1203044941669081149]
  $setGlobalUserVar[eplayer8n;yogesh02608]
  $setGlobalUserVar[eplayer8;771985432812322828]
  $setGlobalUserVar[eplayer9n;azazel0761]
  $setGlobalUserVar[eplayer9;857614507315560478]
  $setGlobalUserVar[eplayer10n;alienabd]
  $setGlobalUserVar[eplayer10;761168939144839170]
  `,
});
client.command({
  name: "test",
  code: `
  $filterMessage[$splitText[1];python] $splitText[2] $splitText[3] $splitText[4]
$textSplit[$splitText[2];,]
$splitText[2]
$textSplit[$getMessage[$channelID;1238208134388912260;content];\`\`\`python]`,
}) 
// $message[1] // $message[2]
client.command({
  name: "mm",
  code: `
  $attachCanvas[avatar] 
$fillText[avatar;$message[1];white;60px Baloo-Regular;280;230]
$fillText[avatar;$message[2];white;60px Baloo-Regular;410;230]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238805124344713316/image_2024-05-11_161859032-removebg-preview.png?ex=66409ead&is=663f4d2d&hm=c329d651f30acff78fc18cc516702a5eff4ea8e8114da910be23233dff218d7e&=&format=webp&quality=lossless];94;153;165;120]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238751568447148063/image_2024-05-11_124408023-removebg-preview.png?ex=66406ccc&is=663f1b4c&hm=372620cf5a20425ebc6d259460b5c44f893f097603512e2052259691c76aed2e&=&format=webp&quality=lossless];478;162;160;100]
$drawImage[avatar;$nonEscape[https://media.discordapp.net/attachments/1094319847355207710/1238728858749108266/kxt-match-scores-result-template-free-editor-online_1.jpg?ex=664057a6&is=663f0626&hm=9909915742d6ee3d608b04ab7c949905599fc11db8b2a1c99eaba4c689d45e27&=&format=webp];0;0;730;411]
$createCanvas[avatar;730;411]`
}) // #E0E0E0
client.command({
  name: "profile",
  code: `
  $attachCanvas[capsule]
$drawImage[capsule;$nonEscape[$getGlobalUserVar[badge1]];555;830;100;100;40]
$drawImage[capsule;$nonEscape[$getGlobalUserVar[badge2]];690;830;100;100;40]
$drawImage[capsule;$nonEscape[$getGlobalUserVar[badge3]];835;830;100;100;40]
$fillText[capsule;$getGlobalUserVar[matches];#00FFFF;55px Baloo-Regular;115;675]
$fillText[capsule;$getGlobalUserVar[goals];#00FFFF;55px Baloo-Regular;325;675]
$fillText[capsule;$getGlobalUserVar[attempts];#00FFFF;55px Baloo-Regular;535;675]
$fillText[capsule;$getGlobalUserVar[saves];#00FFFF;55px Baloo-Regular;745;675]
$fillRect[capsule;#2c302850;710;575;170;140;20]
$fillRect[capsule;#2c302850;500;575;170;140;20]
$fillRect[capsule;#2c302850;290;575;170;140;20]
$fillRect[capsule;#2c302850;80;575;170;140;20]
$fillText[capsule;Player stats;white;50px Baloo-Regular;60;550]
$fillText[capsule;#;#00CCCC;50px Lato-BlackItalic;110;925]
$fillText[capsule;#;#00CCCC;50px Lato-BlackItalic;310;930]
$fillText[capsule;$getLeaderboardInfo[srcoins;$authorId;guild;top];#00FFFF;50px Lato-BlackItalic;140;925]
$fillText[capsule;$getLeaderboardInfo[srcoins;$authorId;global;top];#00FFFF;50px Lato-BlackItalic;340;930]
  $fillText[capsule;Guild;#E0E0E0;35px Baloo-Regular;90;860]
  $fillText[capsule;Global;#E0E0E0;35px Baloo-Regular;290;860]
  $fillRect[capsule;#2c302850;280;825;170;140;20]
  $fillRect[capsule;#2c302850;80;825;170;140;20]
$fillText[capsule;Badges;white;50px Baloo-Regular;560;805]
$fillRect[capsule;#2c302850;540;750;410;230;20]
$fillText[capsule;Leaderboard: Win;white;50px Baloo-Regular;60;805]
$fillRect[capsule;#2c302850;50;750;420;230;20]
$fillRect[capsule;#2c302850;50;500;900;230;20]
$fillText[capsule;Registered Name;white;50px Baloo-Regular;560;325]
$fillText[capsule;$username[$authorID];#00FF80;45px Lato-BlackItalic;560;400]
$fillText[capsule;Registered Date;white;50px Baloo-Regular;560;125]
$fillText[capsule;$getGlobalUserVar[debut];#00FF80;45px Lato-BlackItalic;560;200]
  $fillRect[capsule;#2c302850;540;260;410;180;20]
$fillRect[capsule;#2c302850;540;60;410;180;20]
$drawImage[capsule;$nonEscape[$authorAvatar];51;59;419;379;20]
$fillRect[capsule;#2c302850;50;60;420;380;20]
$drawImage[capsule;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1238872221024518244/dynamic-gradient-football-background_23-2149007789.png?ex=6643802a&is=66422eaa&hm=85f57323cf4ddc06be5d82543cde0ceda7efc5c24b7a011a89f190663fb3d75c&=&format=webp&quality=lossless&width=576&height=411];0;0;1000;1000;100]
$strokeRect[capsule;#0a9afa;0;0;1000;1000;10;100]
  $fillRect[capsule;#181414;0;0;1000;1000;100]
  $createCanvas[capsule;1000;1000]
  `
}) // profile
client.command({
  name: "hack",
  code: `
$setGlobalUserVar[badge2;https://media.discordapp.net/attachments/1094425576107946185/1238916999149785088/image_2024-05-11_234333723-removebg-preview.png?ex=664106de&is=663fb55e&hm=a21e4311f4642aab80e706d93120bb82fde69ebb7ffbcba509e25ec18b48a91b&=&format=webp&quality=lossless&width=411&height=411]
$setGlobalUserVar[badge3;https://media.discordapp.net/attachments/1094425576107946185/1239872042828824626/image_2024-05-14_144937758-removebg-preview.png?ex=66448052&is=66432ed2&hm=08ccef2957a62bc911142720ef06cee9308ed71e123838b34370688ef0bd6599&=&format=webp&quality=lossless&width=411&height=411]
  `
}) // $message[1];$message[2];$message[3];$message[4]
client.command({
  name: "level",
  code: `$attachCanvas[capsule]
  
  $fillRect[capsule;#2c302850;680;170;250;170;40]
  $fillRect[capsule;#2c302850;380;170;250;170;40]
$fillText[capsule;$getGlobalUserVar[level];#00FF80;50px Lato-BlackItalic;650;160]
  $fillText[capsule;Level:;red;50px Baloo-Regular;380;160]
$fillText[capsule;$username[$authorID];#00FF80;50px Lato-BlackItalic;650;100]
$fillText[capsule;Username:;red;50px Baloo-Regular;380;100]
$drawImage[capsule;$nonEscape[$authorAvatar];30;30;300;300;160]
  $fillRect[capsule;#181414;30;30;300;300;160]
$drawImage[capsule;$nonEscape[https://media.discordapp.net/attachments/1094425576107946185/1239087011143352381/GettyImages-1168575705.png?ex=6641a534&is=664053b4&hm=f2d5a6ca8baea15a172f1a853c5a11e69b8f92842068f69e92c67a8fe5982e39&=&format=webp&quality=lossless];2;3;1020;345;140]
  $strokeRect[capsule;red;0;0;1024;350;10;140]
  $fillRect[capsule;#181414;0;0;1024;350;140]
  $createCanvas[capsule;1024;350]
  `
})
