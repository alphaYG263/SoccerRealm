module.exports = {
  name: "$alwaysExecute",
  code: `
$setGlobalUserVar[exp;$if[$get[level]==0;$if[$get[exp]>=250;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==0;$if[$get[exp]>=250;$sum[$get[level];1];$get[level]];$get[level]]]
$title[1;Level Up!]
$description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
$let[exp;$getGlobalUserVar[exp]]
$let[level;$getGlobalUserVar[level]]
$thumbnail[1;$userAvatar[$authorID]]
$color[Random]
$onlyIf[$getGlobalUserVar[level]==0;]
$onlyIf[$getGlobalUserVar[exp]>=250;]
`
},
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==1;$if[$get[exp]>=500;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==1;$if[$get[exp]>=500;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==1;]
  $onlyIf[$getGlobalUserVar[exp]>=500;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==2;$if[$get[exp]>=650;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==2;$if[$get[exp]>=650;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==2;]
  $onlyIf[$getGlobalUserVar[exp]>=650;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==3;$if[$get[exp]>=750;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==3;$if[$get[exp]>=750;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==3;]
  $onlyIf[$getGlobalUserVar[exp]>=750;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==4;$if[$get[exp]>=850;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==4;$if[$get[exp]>=850;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==4;]
  $onlyIf[$getGlobalUserVar[exp]>=850;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==5;$if[$get[exp]>=950;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==5;$if[$get[exp]>=950;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==5;]
  $onlyIf[$getGlobalUserVar[exp]>=950;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==6;$if[$get[exp]>=1050;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==6;$if[$get[exp]>=1050;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==6;]
  $onlyIf[$getGlobalUserVar[exp]>=1050;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==7;$if[$get[exp]>=1250;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==7;$if[$get[exp]>=1250;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==7;]
  $onlyIf[$getGlobalUserVar[exp]>=1250;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==8;$if[$get[exp]>=1350;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==8;$if[$get[exp]>=1350;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==8;]
  $onlyIf[$getGlobalUserVar[exp]>=1350;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==9;$if[$get[exp]>=1450;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==9;$if[$get[exp]>=1450;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==9;]
  $onlyIf[$getGlobalUserVar[exp]>=1450;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==10;$if[$get[exp]>=1550;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==10;$if[$get[exp]>=1550;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==10;]
  $onlyIf[$getGlobalUserVar[exp]>=1550;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==11;$if[$get[exp]>=1650;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==11;$if[$get[exp]>=1650;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==11;]
  $onlyIf[$getGlobalUserVar[exp]>=1650;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==12;$if[$get[exp]>=1750;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==12;$if[$get[exp]>=1750;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==12;]
  $onlyIf[$getGlobalUserVar[exp]>=1750;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==13;$if[$get[exp]>=1850;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==13;$if[$get[exp]>=1850;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==13;]
  $onlyIf[$getGlobalUserVar[exp]>=1850;]
  `
  }
,
 module.exports = {
    name: "$alwaysExecute",
    code: `
  $setGlobalUserVar[exp;$if[$get[level]==14;$if[$get[exp]>=1950;0;$get[exp]];$get[exp]]]
$setGlobalUserVar[level;$if[$get[level]==14;$if[$get[exp]>=1950;$sum[$get[level];1];$get[level]];$get[level]]]
  $title[1;Level Up!]
  $description[1;Congratulations <@$authorID>, you have leveled up to level $sum[$get[level];1]!<:level_up:1202301784995930224> ]
  $let[exp;$getGlobalUserVar[exp]]
  $let[level;$getGlobalUserVar[level]]
  $thumbnail[1;$userAvatar[$authorID]]
  $color[Random]
  $onlyIf[$getGlobalUserVar[level]==14;]
  $onlyIf[$getGlobalUserVar[exp]>=1950;]
  `
  }
