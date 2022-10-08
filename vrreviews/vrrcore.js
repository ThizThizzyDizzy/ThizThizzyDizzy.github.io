//https://stackoverflow.com/questions/20966817/how-to-add-text-inside-the-doughnut-chart-using-chart-js
Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;

            if (minFontSize === undefined) {
                minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var words = txt.split(' ');
            var line = '';
            var lines = [];

            // Break words up into multiple lines if necessary
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > elementWidth && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }

            // Move the center up depending on line height and number of lines
            centerY -= (lines.length / 2) * lineHeight;

            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
            //Draw text in center
            ctx.fillText(line, centerX, centerY);
        }
    }
});
const games = {
    alyx_modded:{"score":648,"immersion":{"significance":5,"locomotion":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5},"sectionScore":160,"maxScore":200,"presence":{"significance":3,"hands":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"upperBody":{"significance":4,"score":1,"sectionScore":18,"maxScore":91,"relevance":4},"sectionScore":35,"maxScore":56,"fullBody":{"significance":3,"score":0,"sectionScore":0,"maxScore":56,"relevance":4},"relevance":4},"relevance":5,"interactions":{"significance":5,"world":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"static":{"significance":2,"score":5,"sectionScore":50,"maxScore":50,"relevance":5},"sectionScore":197,"self":{"significance":3,"score":2,"sectionScore":6,"maxScore":12,"relevance":2},"maxScore":200,"tools":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"relevance":5,"props":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5}}},"name":"Half-Life: Alyx","graphics":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"audio":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"maxScore":716,"interface":{"significance":4,"controls":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"mainMenu":{"significance":3,"score":3,"sectionScore":19,"maxScore":32,"relevance":3},"hud":{"significance":5,"sectionScore":168,"physicalHud":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"maxScore":200,"holographicHud":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5},"relevance":5},"sectionScore":107,"maxScore":130,"relevance":5,"ingameMenus":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5}},"hardware":{"significance":3,"sectionScore":51,"additionalHaptics":{"significance":3,"sectionScore":64,"bhaptics":{"significance":5,"score":4,"sectionScore":160,"maxScore":200,"relevance":5},"maxScore":80,"relevance":5},"controllers":{"significance":5,"indexFingerTracking":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"sectionScore":200,"controllerHaptics":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"maxScore":200,"relevance":5},"maxScore":56,"fullBodyTracking":{"significance":3,"score":0,"sectionScore":0,"maxScore":0,"relevance":1},"eyeTracking":{"significance":2,"score":0,"sectionScore":0,"maxScore":7,"relevance":2},"relevance":4,"faceTracking":{"significance":1,"score":0,"sectionScore":0,"maxScore":0,"relevance":1}},"timestamp":1665243567227},
    alyx:{"score":636,"immersion":{"significance":5,"locomotion":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5},"sectionScore":160,"maxScore":200,"presence":{"significance":3,"hands":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"upperBody":{"significance":4,"score":1,"sectionScore":18,"maxScore":91,"relevance":4},"sectionScore":35,"maxScore":56,"fullBody":{"significance":3,"score":0,"sectionScore":0,"maxScore":56,"relevance":4},"relevance":4},"relevance":5,"interactions":{"significance":5,"world":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"static":{"significance":2,"score":5,"sectionScore":50,"maxScore":50,"relevance":5},"sectionScore":197,"self":{"significance":3,"score":2,"sectionScore":6,"maxScore":12,"relevance":2},"maxScore":200,"tools":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"relevance":5,"props":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5}}},"name":"Half-Life: Alyx","graphics":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"audio":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"maxScore":716,"interface":{"significance":4,"controls":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"mainMenu":{"significance":3,"score":3,"sectionScore":19,"maxScore":32,"relevance":3},"hud":{"significance":5,"sectionScore":168,"physicalHud":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"maxScore":200,"holographicHud":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5},"relevance":5},"sectionScore":107,"maxScore":130,"relevance":5,"ingameMenus":{"significance":4,"score":3,"sectionScore":78,"maxScore":130,"relevance":5}},"hardware":{"significance":3,"sectionScore":39,"additionalHaptics":{"significance":3,"sectionScore":0,"bhaptics":{"significance":5,"score":0,"sectionScore":0,"maxScore":200,"relevance":5},"maxScore":80,"relevance":5},"controllers":{"significance":5,"indexFingerTracking":{"significance":4,"score":5,"sectionScore":130,"maxScore":130,"relevance":5},"sectionScore":200,"controllerHaptics":{"significance":5,"score":5,"sectionScore":200,"maxScore":200,"relevance":5},"maxScore":200,"relevance":5},"maxScore":56,"fullBodyTracking":{"significance":3,"score":0,"sectionScore":0,"maxScore":0,"relevance":1},"eyeTracking":{"significance":2,"score":0,"sectionScore":0,"maxScore":7,"relevance":2},"relevance":4,"faceTracking":{"significance":1,"score":0,"sectionScore":0,"maxScore":0,"relevance":1}},"timestamp":1665243580925}
};
const baseColors = [
  "#1e7145",
  "#d1a460",
  "#73c8d1",
  "#582994",
  "#e0c55a",
  "#111111",
  "#EEEEEE00"
];
const baseLabels = [
    "Graphics",
    "Audio",
    "Interface",
    "Immersion",
    "Hardware",
    "Mods",
    "Missed"
];
//https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function genColor(){
    return hslToHex(Math.random()*360, 75, 60);
}
function get(gameName, categoryName){
    var game = games[gameName];
    var cats = categoryName.split(".");
    for(const a of cats){
        game = game[a];
    }
    return game;
}
function genEndpointChart(canvas, gameName, categoryName){
    var game = get(gameName, categoryName);
    var modded = get(gameName+"_modded", categoryName);
    if(!modded)modded = game;
    if(!game.score&&game.score!==0)return genCategoryChart(canvas, gameName, categoryName);
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: [
                "Score",
                "Mods",
                "Missed"
            ],
            datasets: [{
                backgroundColor: [
                    "#1e7145",
                    "#111111",
                    "#EEEEEE00"
                ],
                data: [
                    game.score,
                    modded.score-game.score,
                    5-modded.score
                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: "  "+modded.score+"  ",
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}
function genEndpointSignificanceChart(canvas, gameName, categoryName){
    var game = get(gameName, categoryName);
    var modded = get(gameName+"_modded", categoryName);
    if(!modded)modded = game;
    var datasets = [];
    if(game.score||game.score===0){
        datasets.push({
            backgroundColor: [
                "#33b6d2",
                "#EEEEEE00"
            ],
            data: [
                game.significance,
                5-game.significance
            ]
        });
    }else{
        for(const prop in game){
            if(prop==="sectionScore")continue;
            if(prop==="maxScore")continue;
            if(prop==="relevance")continue;
            if(prop==="significance")continue;
            datasets.push({
                backgroundColor: [
                    "#33b6d2",
                    "#EEEEEE00"
                ],
                data: [
                    game[prop].significance,
                    5-game[prop].significance
                ]
            });
        }
    }
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: [
                "Significance",
                "Insignificance"
            ],
            datasets: datasets
        },
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: "  "+game.significance+"  ",
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}
function genCategoryChart(canvas, gameName, categoryName){
    var game = get(gameName, categoryName);
    var modded = get(gameName+"_modded", categoryName);
    if(!modded)modded = game;
    let data = {
        labels: [
        ],
        datasets: [{
            backgroundColor: [
            ],
            data: [
            ]
        }]
    };
    let totalMax = 0;
    let totalScore = 0;
    let vanillaScore = 0;
    for(const prop in game){
        if(prop==="sectionScore")continue;
        if(prop==="maxScore")continue;
        if(prop==="relevance")continue;
        if(prop==="significance")continue;
        data.labels.push(prop);
        totalScore+=modded[prop].sectionScore;
        vanillaScore+=game[prop].sectionScore;
        totalMax+=modded[prop].maxScore;
        data.datasets[0].data.push(game[prop].sectionScore);
        data.datasets[0].backgroundColor.push(genColor());
    }
    data.labels.push("Mods");
    data.datasets[0].data.push(totalScore-vanillaScore);
    data.datasets[0].backgroundColor.push("#111111");
    data.labels.push("Missed");
    data.datasets[0].data.push(totalMax-totalScore);
    data.datasets[0].backgroundColor.push("#EEEEEE00");
    new Chart(canvas, {
        type: "doughnut",
        data: data,
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: modded.sectionScore+"/"+modded.maxScore,
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}
function genRelevanceChart(canvas, gameName, categoryName){
    var game = get(gameName, categoryName);
    var modded = get(gameName+"_modded", categoryName);
    if(!modded)modded = game;
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: [
                "Relevance",
                "Irrelevance"
            ],
            datasets: [{
                backgroundColor: [
                    "#d6b233",
                    "#EEEEEE00"
                ],
                data: [
                    game.relevance,
                    5-game.relevance
                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: "  "+game.relevance+"  ",
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}
function genCategorySignificanceChart(canvas, gameName, categoryName){
    var game = get(gameName, categoryName);
    var modded = get(gameName+"_modded", categoryName);
    if(!modded)modded = game;
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: [
                "Significance",
                "Insignificance"
            ],
            datasets: [{
                backgroundColor: [
                    "#33b6d2",
                    "#EEEEEE00"
                ],
                data: [
                    game.significance,
                    5-game.significance
                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: "  "+game.significance+"  ",
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}
function genChart(canvas, gameName){
    var game = games[gameName];
    var modded = games[gameName+"_modded"];
    if(!modded)modded = game;
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: baseLabels,
            datasets: [{
                backgroundColor: baseColors,
                data: [
                    game.graphics.sectionScore,
                    game.audio.sectionScore,
                    game.interface.sectionScore,
                    game.immersion.sectionScore,
                    game.hardware.sectionScore,
                    modded.score-game.score,
                    game.maxScore-modded.score
                ]
            }]
        },
        options: {
            legend: {
                display: false
            },
            border: {
                display: false
            },
            elements: {
                arc:{
                    borderColor: "#EEEEEE00"
                },
                center: {
                    text: game.score+"/"+game.maxScore,
                    color: "#111111",
                    fontStyle: 'Verdana',
                    sidePadding: 0,
                    minFontSize: false
                }
            }
        }
    });
}