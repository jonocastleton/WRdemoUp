

//set main namespace
goog.provide('world_runner');
//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.fill.LinearGradient');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('lime.GlossyButton');
goog.require('lime.audio.Audio');
//const char kAllowFileAccessFromFiles[]      = "allow-file-access-from-files";

//********ENTRYPOINT*********************************
		world_runner.start = function(){
		    var director = new lime.Director(document.body,960, 640);
		    director.makeMobileWebAppCapable();
		    director.setDisplayFPS(false);

				var beginningScene = new lime.Scene();
		    var beginningLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);

				var beginningMap = new lime.Sprite().setSize(960, 640).setFill('thebeginning.png').setPosition(0,0).setAnchorPoint(0,0);
				var wise = new lime.Sprite().setSize(350, 350).setFill('wise.png').setPosition(385,405);
				var pablo = new lime.Sprite().setSize(270, 270).setFill('pablo.png').setPosition(705,455);

				var wordBubbleOne = new lime.Sprite().setSize(580, 455).setFill('img/wordBubble1.png').setPosition(605,180);
				//var labelIntroTwo = new lime.RoundedRect().setSize(550,135).setFill('#000000').setPosition(605,150);
				//new lime.Label().setSize(550,135).setText(' ').setFontSize(26).setFontFamily("copperplate").setFill('#FFF').setPosition(605,150).setAlign("center");
				//labelIntroTwo.setStroke(5,0,100,0,.2);
				var labelIntro = new lime.Label().setSize(445,90).setText('Hello Pablo ').setFontSize(26).setFontFamily("copperplate").setFill('#FFF').setPosition(605,150).setAlign("center").setFontColor("#000000");
				var arrowIntro = new lime.Sprite().setSize(120, 120).setFill('arrow2.png').setPosition(855,225);

				var nextButton = new lime.GlossyButton().setSize(80,40).setPosition(840,228)
						.setText('NEXT').setColor('#FFF').setFontSize(16);
				//	nextButton.setStroke(5,0,100,0,.5);


 // ************** DIALOGUE TOGGLE ***************

				var i = 0;

						goog.events.listen(nextButton, ['mousedown','touchstart'], function(e) {
								//change words
								if (i === 0) {
									labelIntro.setText('We have picked up signals from Utah indicating another potential World Runner.');
									i++;
								}
								else if (i === 1) {
									labelIntro.setText('Go meet him and help him understand how to find his way to become a World Runner.');
									i++;
								}
								else if (i === 2) {
									labelIntro.setText('You guys can realize your potential together.');
									i++;
								}
								else {
									director.replaceScene(schoolScene);
									schoolLayer.setDirty(255)
									startaudio.pause();
									setTimeout(function(){
										var hola = new Audio('Hola2.m4a');
										hola.play()

									}, 50);
								}

						});


				beginningLayer.appendChild(beginningMap);
				beginningLayer.appendChild(wise);
				beginningLayer.appendChild(pablo);
				beginningLayer.appendChild(wordBubbleOne);
				beginningLayer.appendChild(labelIntro);
				beginningLayer.appendChild(arrowIntro);
				beginningLayer.appendChild(nextButton);
				beginningScene.appendChild(beginningLayer);
				director.replaceScene(beginningScene);

//
				//var startaudio = new lime.audio.Audio('song.mp3');
				//startaudio.play();
				var startaudio = new Audio('song.mp3');
				startaudio.play();
				var levelUpSound = new Audio('audio/LevelUp.m4a');
				var greatJob = new Audio('audio/greatJob.m4a');
				var bienHecho = new Audio('audio/bienhecho.m4a');
				var greatJobBienHecho = new Audio('audio/GreatJobBienHecho.m4a');

//



/*				goog.events.listen(beginningMap, ['mousedown','touchstart'], function(e) {
						//go back to the map


				});
*///

//********SCHOOL*********************************

			var schoolScene = new lime.Scene();
			var schoolLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
			var schoolMap = new lime.Sprite().setSize(960, 640).setFill('school.png').setPosition(0,0).setAnchorPoint(0,0);

			var hero = new lime.Sprite().setSize(270, 270).setFill('img/hero.png').setPosition(495, 455);
			//var pablo = new lime.Sprite().setSize(300, 300).setFill('pablo.png').setPosition(705,455);
			var pabloSchool = new lime.Sprite().setSize(pablo.getSize()).setFill(pablo.getFill()).setPosition(665,455);

			var wordBubbleTwo = new lime.Sprite().setSize(600, 595).setFill('img/wordBubble2.png').setPosition(635,200);

//			var labelSchoolIntroTwo = new lime.RoundedRect().setSize(465,240).setFill('#FFF').setPosition(655,170);
//			labelSchoolIntroTwo.setStroke(5,0,100,0,.5);
			var labelSchoolIntro = new lime.Label().setSize(395,140).setText('Hello friend ').setFontSize(27).setFontFamily("tahoma").setFontWeight("bold").setFill('#FFF').setPosition(645,150);

			//some options
			var schoolNextButton = new lime.GlossyButton().setSize(100,50).setPosition(870,310)
					.setText('Next').setColor('#FFF').setFontSize(18);
			//	nextButton.setStroke(5,0,100,0,.5);

			var j = 0;

				goog.events.listen(schoolNextButton, ['mousedown','touchstart'], function(e) {
						//change words
						if (j === 0) {
							labelSchoolIntro.setText('It is very nice to meet you. I have some great news for you! ');
							j++;
						}
						else if (j === 1) {
							labelSchoolIntro.setText('You come from a long line of World Runners. I do too! Pretty cool huh? We are going to help each other get better at it.');
							j++;
						}
						else if (j === 2) {
							labelSchoolIntro.setText('World Runners help protect this world. There are cracks in the world that let monsters enter here.');
							j++;
						}
						else if (j === 3) {
							labelSchoolIntro.setText('We must defeat the monsters and close the cracks.');
							j++;
						}
						// else if (j === 3) {
						// 	labelSchoolIntro.setText('The thing about this part of our world you gotta understand, is that you make the biggest impact when you know at least 2 languages.');
						// 	j++;
						// }
						// else if (j === 4) {
						// 	labelSchoolIntro.setText('You have to use your second language to succeed.');
						// 	j++;
						// }
						 else if (j === 4) {
							labelSchoolIntro.setText('I will take you to a part of the world where we can get started ... Antartica!');
							j++;
						}
						else {
							director.replaceScene(mapScene,lime.transitions.slideinright);
							mapLayer.setDirty(255)
						}

				});

				schoolLayer.appendChild(schoolMap);
				schoolLayer.appendChild(pabloSchool);
				schoolLayer.appendChild(hero);
				schoolLayer.appendChild(wordBubbleTwo);
				schoolLayer.appendChild(labelSchoolIntro);
				schoolLayer.appendChild(schoolNextButton);
				schoolScene.appendChild(schoolLayer);
				//	director.replaceScene(beginningScene);




//********TRADING TAVERN*********************************

				var tradingScene = new lime.Scene();
				var tradingLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
				var tradingMap = new lime.Sprite().setSize(960, 640).setFill('tradingtavern.png').setPosition(0,0).setAnchorPoint(0,0);



		//		var labelSchoolIntroTwo = new lime.RoundedRect().setSize(465,240).setFill('#FFF').setPosition(655,170);
		//		labelSchoolIntroTwo.setStroke(5,0,100,0,.5);
				var labelTavern = new lime.Label().setSize(425,90).setText('Hola. Me llamo Nafi. Yo puedo darte cosas que necesitas. Que quieres?').setFontSize(27).setFontFamily("tahoma").setFontWeight("bold").setFill('#FFF').setPosition(600,160);
				var littlePablo = new lime.Sprite().setSize(70,70).setFill('img/pabloHead.png').setPosition(905,35);
				var hintLabel = new lime.Label().setSize(125,50).setText('Ayuda / Help ?').setFontSize(14).setFontFamily("tahoma").setFontWeight("bold").setFill('#FFF').setPosition(785,20).setAlign('Left');
				var helpLabel = new lime.Label().setSize(300,90).setText('Nafi says he can give you things that he needs. Que quieres means what do you want?').setFontSize(14).setFontFamily("tahoma").setFill('#FFF').setPosition(490,60).setPadding(5);
				helpLabel.setStroke(5,0,100,0,.8);

				goog.events.listen(hintLabel, ['mousedown','touchstart'], function(e) {
						tradingLayer.appendChild(helpLabel)
				});
						//some options
		//		var schoolNextButton = new lime.GlossyButton().setSize(100,50).setPosition(850,340)
			//			.setText('Next').setColor('#FFF');
						//	nextButton.setStroke(5,0,100,0,.5);

				tradingLayer.appendChild(tradingMap);
				tradingLayer.appendChild(labelTavern);
				tradingLayer.appendChild(hintLabel);
				tradingLayer.appendChild(littlePablo);
//				tradingLayer.appendChild(tradingNextButton);
				tradingScene.appendChild(tradingLayer);



//******** MAP 1 *********************************

   			var mapScene = new lime.Scene();
		    var mapLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
		    var gameMap = new lime.Sprite().setSize(960, 640).setFill('map.png').setPosition(0,0).setAnchorPoint(0,0);

				var student = new lime.Sprite().setSize(125,125).setFill(hero.getFill()).setPosition(495,455);
				var crackhorizontal = new lime.Sprite().setSize(275,275).setFill('crackhorizontal.png').setPosition(515,585);
				var powerBar = new lime.Sprite().setSize(90, 20).setFill('img/powerbar.png').setPosition(60,20);

				function questionNumberfn () {
						var questionNumber = Math.floor(Math.random() * 7);
						return questionNumber;
				};

				function answerNumberfn () {
						var answerNumber = Math.floor(Math.random() * 2);
						return answerNumber;
				};


		//move hero
				goog.events.listen(gameMap, ['mousedown','touchstart'], function(e) {
				    var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(1);

						var pos = student.getPosition();
						console.log(pos.x);
						if (e.position.x < pos.x) {
							student.setFill('img/studentLeft.png');
						}
						else {
							student.setFill('img/hero.png');
						};
				    student.runAction(movement);
				//		startaudio.play();
				});


   //give hero & monster attributes
				student.life = 20;
				student.money = 100;
				student.attack = 15;
				student.level = 1;


				var monster = new lime.Sprite().setSize(225, 225).setFill('monster.png').setPosition(690,310);
				monster.life = 15;
				monster.money = 10;
				monster.attack = 1;

				var transitionA = new lime.Sprite().setSize(60, 100).setPosition(880,310);
				var level = new lime.Label().setText(student.level).setPosition(130,20).setFontSize(20).setPadding(4).setFill("#FFF");
		//	level.setStroke(2,19,93,214);

 // FINISH - APPEND MAP 1
				mapLayer.appendChild(gameMap);
				mapLayer.appendChild(student);
				mapLayer.appendChild(monster);
				mapLayer.appendChild(crackhorizontal);
				mapLayer.appendChild(level);
				mapLayer.appendChild(powerBar);
				mapScene.appendChild(mapLayer);
				mapLayer.appendChild(transitionA);
	//	    director.replaceScene(mapScene);


//************ Question Bank *********

	var questions = [
		"How do you say hello in Spanish?",
		"What color is the sky?",
		"How do you say book in Spanish?",
		"How do you say world in Spanish?",
		"What are words for 'My name is'?",
		"What is the word for 'things'?",
		"How do you say 'I can'?"
	];

	var answers = [
		["Hola", "Adios"],
		["Azul", "Rojo"],
		["Libro", "Carta"],
		["Mundo", "Campo"],
		["Me llamo", "Como esta"],
		["cosas", "raro"],
		["Yo puedo", "Yo como"]
	];


//***********fight scene definition *************
				var fightScene = new lime.Scene().setRenderer();
				var fightLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
				/*var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1)
					.addColorStop(0,'#B2DFEE').addColorStop(1, '#0000CD');
				var sky = new lime.Sprite().setSize(960, 320).setPosition(0,0).setAnchorPoint(0,0).setFill(sky_gradient);
				var grass = new lime.Sprite().setSize(960, 320).setPosition(0,320).setAnchorPoint(0,0).setFill('rgb(0,125,0)');
				fightLayer.appendChild(sky);
				fightLayer.appendChild(grass);
				*/
				var fightMap = new lime.Sprite().setSize(960, 640).setFill('fightScene.png').setPosition(0,0).setAnchorPoint(0,0);


	//show the images of the monster and student
				var fighterOne = new lime.Sprite().setSize(student.getSize()).setFill(student.getFill()).setPosition(250,450);
				var fighterTwo = new lime.Sprite().setSize(monster.getSize()).setFill(monster.getFill()).setPosition(750, 430);
			//	var everyMonster = new lime.Sprite();
			//	everyMonster = fighterTwo;

				fightLayer.appendChild(fightMap);
				fightLayer.appendChild(fighterOne);
				fightLayer.appendChild(fighterTwo);
				fightScene.appendChild(fightLayer);


	//move to fight scene if moster confronted
				student.inFightScene = false;

					lime.scheduleManager.schedule(function(dt) {
						if(!this.inFightScene) {
								if(monster.life >0 && goog.math.Box.intersects(this.getBoundingBox(),monster.getBoundingBox())) {
										var questNum = questionNumberfn();
										labelQuestion.setText(questions[questNum]);
										var answerOne = answerNumberfn();
										var answerTwo;
										if (answerOne === 0) {
											answerTwo = 1;
											answerButton = true;
										}
										else {
											answerTwo = 0;
											answerButton = false;
										}
										attackButton.setText(answers[questNum][answerOne]);
										runButton.setText(answers[questNum][answerTwo]);
										director.replaceScene(fightScene);
										fightLayer.setDirty(255)
										student.inFightScene = true;
								}
						}
					}, student);



		//labels with characters stats
					var labelFighterOneLife = new lime.Label().setText('Life:'+student.life).setPosition(250,530);
					var labelFighterOneAttack = new lime.Label().setText('Attack:'+student.attack).setPosition(250,550);

					var labelFighterTwoLife = new lime.Label().setText('Life:'+monster.life).setPosition(750, 530);
					var labelFighterTwoAttack = new lime.Label().setText('Attack:'+monster.attack).setPosition(750, 550);
					var labelQuestion = new lime.Label().setSize(300,50).setFontFamily('Verdana').setFontSize(30).setFill('#FFF').setPosition(475,150);
					var labelLabel = new lime.Label().setSize(600,220).setText(' ').setFill('#FFF').setPosition(475,200);
					labelLabel.setStroke(3,8,22,170,.9);


	//buttons for answer options
					var answerButton;
					var attackButton = new lime.GlossyButton().setSize(90,40).setPosition(400,260)
					    .setColor('#00e5ff',.3);

					var runButton = new lime.GlossyButton().setSize(90,40).setPosition(540,260)
					    .setColor("#00e5ff");

	//				fightLayer.appendChild(fighterOne);
	//				fightLayer.appendChild(fighterTwo);

//********* FINISH - APPEND FIGHT SCENE ****************
					fightLayer.appendChild(labelFighterOneLife);
					fightLayer.appendChild(labelFighterOneAttack);
					fightLayer.appendChild(labelFighterTwoLife);
					fightLayer.appendChild(labelFighterTwoAttack);
					fightLayer.appendChild(labelLabel);
					fightLayer.appendChild(labelQuestion);

					fightLayer.appendChild(attackButton);
					fightLayer.appendChild(runButton);

					fightScene.appendChild(fightLayer);

					// var theScene = new lime.Scene().setRenderer();
					// theScene = mapScene;


// ******** FIGHT SCENE ACTIONS / RESULTS *********

				//  wrong answer
					goog.events.listen(runButton, ['mousedown','touchstart'], function(e) {
					    //go back to the map
							console.log(answerButton);
					    if (answerButton === true) {

							director.replaceScene(mapScene);
					    mapLayer.setDirty(255);

					    //move the student away from the monster, or the fight scene will be triggered again!
					    //this is just a quick, non-elegant way of doing this
					    currentPos = student.getPosition();
					    student.setPosition(currentPos.x-250, currentPos.y-80);

					    student.inFightScene = false;
						}
						else {
							rightAnswer(fightLayer);
						}

					});


//****** Fight Scene Function *****


function rightAnswer (sceneInput){
	var labelYouDefeatedBlank = new lime.RoundedRect().setSize(950,200).setFill('#FFF').setPosition(480,160);
	labelYouDefeatedBlank.setStroke(5,0,100,0,.5);
	sceneInput.appendChild(labelYouDefeatedBlank);
	var labelYouDefeated = new lime.Label().setSize(600,90).setText('YOU WON!!').setFill('#FFF').setPosition(420,130).setFontSize(38).setFontFamily('tahoma');
	sceneInput.appendChild(labelYouDefeated);
	var labelYouLeveledUp = new lime.Label().setSize(600,90).setText('YOU DEFEATED THE MONSTER AND SENT IT BACK THROUGH THE CRACK IN OUR WORLD. GREAT JOB!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(420,210);
	sceneInput.appendChild(labelYouLeveledUp);
	var pabloHead = new lime.Sprite().setSize(250,250).setFill('img/pablobody.png').setPosition(785,175);
	sceneInput.appendChild(pabloHead);

	var arrowFight = new lime.Sprite().setSize(120, 120).setFill(arrowIntro.getFill()).setPosition(855,305);
	var fightNextButton = new lime.GlossyButton().setSize(80,40).setPosition(840,308)
			.setText('NEXT').setColor('#FFF').setFontSize(20);

	var i = 0;

	if (i === 0) {
		greatJob.play();
	}
	else if (i < 3) {
		greatJobBienHecho.play();
	}
	else {
		bienHecho.play();s
	}
	i++

	sceneInput.appendChild(arrowFight);
	sceneInput.appendChild(fightNextButton);


	labelLabel.setHidden(true);
	labelQuestion.setHidden(true);
	attackButton.setHidden(true);
	runButton.setHidden(true);

	goog.events.listen(fightNextButton, ['mousedown','touchstart'], function(e) {

		setTimeout(function(){
			//get the monster money
		 // student.money += monster.money;

			//go back to the map
		//	student.inFightScene = false;

			director.replaceScene(mapScene);
			mapLayer.setDirty(255)

			//delete the monster object
			monster.setHidden(true);
			delete monster;

			//student.level++;
			level.setText(student.level);
//			level.setText('Power Level: '+ student.level);

//**** YOU WON LABELS *********************


			// var arrow = new lime.Sprite().setSize(75,50).setFill("arrow.png").setPosition(800,150);
			// mapLayer.appendChild(arrow);
			console.log(student.level);

		}, 1500);
	})
};

			 // right answer
					goog.events.listen(attackButton, ['mousedown','touchstart'], function(e) {

					    //generate random number
							console.log(answerButton);
							if (answerButton === true) {
									rightAnswer(fightLayer);
								}
								else {
									director.replaceScene(mapScene);
							    mapLayer.setDirty(255);

							    //move the student away from the monster, or the fight scene will be triggered again!
							    //this is just a quick, non-elegant way of doing this
							    currentPos = student.getPosition();
							    student.setPosition(currentPos.x-250, currentPos.y-80);

							    student.inFightScene = false;
								}
								});
					    /*}
					    else {
					        student.life -= monster.attack;

					        //have you been killed?
					        if(student.life <= 0) {
					            var labelGameOver = new lime.Label().setText('GAME OVER!!!').setPosition(160,100);
					            fightLayer.appendChild(labelGameOver);
					        }
					    //}

					    //update stats
					    labelFighterOneLife.setText('Life:'+student.life);
					    labelFighterTwoLife.setText('Life:'+monster.life);
					//}
				});*/

				//move to next map scene if transition is confronted
					student.inMapTwoScene = false;

						lime.scheduleManager.schedule(function(dt) {
							if(!this.inMapTwoScene) {
									if(goog.math.Box.intersects(this.getBoundingBox(),transitionA.getBoundingBox())) {
											director.replaceScene(mapTwoScene);
											mapTwoLayer.setDirty(255)
											student.inMapTwoScene = true;
									}
							}
						}, student);


	//******** MAP 2 *********************************

					var mapTwoScene = new lime.Scene();
					var mapTwoLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
					var twoMap = new lime.Sprite().setSize(960, 640).setFill('map/RightT.png').setPosition(0,0).setAnchorPoint(0,0);

						//var student = new lime.Sprite().setSize(50,55).setFill('img/student.png').setPosition(100,100);
					var studentTwo = new lime.Sprite().setSize(125,125).setFill(hero.getFill()).setPosition(50,310);
					var monsterTwo = new lime.Sprite().setSize(225,225).setFill(monster.getFill()).setPosition(350,310);
					var crackB = new lime.Sprite().setSize(275,275).setFill(crackhorizontal.getFill()).setPosition(515,585);
					var transitionB = new lime.Sprite().setSize(60, 100).setPosition(460,70);
					var powerBarTwo = new lime.Sprite().setSize(90, 20).setFill('img/powerbar.png').setPosition(60,20);
					var coin = new lime.Sprite().setSize(20,20).setFill('img/coin.png').setPosition(500,300);

					mapTwoLayer.appendChild(twoMap);
					mapTwoLayer.appendChild(studentTwo);
					mapTwoLayer.appendChild(monsterTwo);
					mapTwoLayer.appendChild(level);
					mapTwoLayer.appendChild(crackB);
					mapTwoLayer.appendChild(transitionB);
					mapTwoLayer.appendChild(coin);
					mapTwoLayer.appendChild(powerBarTwo);
					mapTwoScene.appendChild(mapTwoLayer);

					//mapTwoLayer.appendChild(transition);

					goog.events.listen(twoMap, ['mousedown','touchstart'], function(e) {
							var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(1);
							var pos = studentTwo.getPosition();
							if (e.position.x < pos.x) {
								studentTwo.setFill('img/studentLeft.png');
							}
							else {
								studentTwo.setFill('img/hero.png');
							};studentTwo.runAction(movement);
					//		startaudio.play();
					});


					//move to fight scene if moster confronted
					studentTwo.inFightScene = false;

					lime.scheduleManager.schedule(function(dt) {
						if(!this.inFightScene) {
								if (goog.math.Box.intersects(this.getBoundingBox(),monsterTwo.getBoundingBox())) {
									var questNum = questionNumberfn();
									labelQuestionB.setText(questions[questNum]);
									correctButtonB.setText(answers[questNum][0]);
									incorrectButtonB.setText(answers[questNum][1]);
									director.replaceScene(fightBScene);
									fightBLayer.setDirty(255)
									studentTwo.inFightScene = true;
								//	theScene = mapTwoScene;
								//	everyMonster = monsterTwo;
								console.log('first hello');
								}
						}
					}, studentTwo);


 //********* FIGHT SCENE TWO ****************************

 var fightBScene = new lime.Scene().setRenderer();
 var fightBLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
 var fightBMap = new lime.Sprite().setSize(960, 640).setFill('fightScene.png').setPosition(0,0).setAnchorPoint(0,0);

//show the images of the monster and student
 var studentFighterB = new lime.Sprite().setSize(student.getSize()).setFill(student.getFill()).setPosition(250,450);
 var monsterFighterB = new lime.Sprite().setSize(monster.getSize()).setFill(monster.getFill()).setPosition(750, 430);
//	var everyMonster = new lime.Sprite();
//	everyMonster = fighterTwo;

 fightBLayer.appendChild(fightBMap);
 fightBLayer.appendChild(studentFighterB);
 fightBLayer.appendChild(monsterFighterB);
 fightBScene.appendChild(fightBLayer);


 // studentTwo.inFightScene = false;

	//  lime.scheduleManager.schedule(function(dt) {
	// 	 if(!this.inFightScene) {
	// 			 if(goog.math.Box.intersects(this.getBoundingBox(),monsterTwo.getBoundingBox())) {
	// 					 var questNum = questionNumberfn();
	// 					 console.log(questNum);
	// 					 labelQuestion.setText(questions[questNum]);
	// 					 correctButtonB.setText(answers[questNum][0]);
	// 					 incorrectButtonB.setText(answers[questNum][1]);
	// 					 director.replaceScene(fightBScene);
	// 					 fightLayer.setDirty(255)
	// 					 studentTwo.inFightScene = true;
	// 					 console.log(questions[2]);
	// 					 console.log('second hello');
	// 			 }
	// 	 }
	//  }, student);



//labels with characters stats

	 var labelQuestionB = new lime.Label().setSize(300,50).setFontFamily('Verdana').setFontSize(30).setFill('#FFF').setPosition(475,150);
	 var labelLabelB = new lime.Label().setSize(600,220).setText(' ').setFill('#FFF').setPosition(475,200);
	 labelLabelB.setStroke(5,0,100,0,.5);


//buttons for answer options
	 var correctButtonB = new lime.GlossyButton().setSize(90,40).setPosition(400,260)
			 .setColor("#cccccc");
   var incorrectButtonB = new lime.GlossyButton().setSize(90,40).setPosition(540,260)
			 .setColor("#cccccc");



//********* FINISH - APPEND FIGHT SCENE ****************
	 fightBLayer.appendChild(labelLabelB);
	 fightBLayer.appendChild(labelQuestionB);
	 fightBLayer.appendChild(correctButtonB);
	 fightBLayer.appendChild(incorrectButtonB);
	 fightBScene.appendChild(fightBLayer);


// ******** FIGHT SCENE ACTIONS / RESULTS *********

 //  wrong answer
	 goog.events.listen(incorrectButtonB, ['mousedown','touchstart'], function(e) {
			 //go back to the map
			//  if (answerButton === true) {
			// 		 rightAnswer(fightBLayer);
			// 	 }
			// 	else {
			 director.replaceScene(mapTwoScene);
			 mapTwoLayer.setDirty(255)

			 //move the student away from the monster, or the fight scene will be triggered again!
			 //this is just a quick, non-elegant way of doing this
			 currentPos = studentTwo.getPosition();
			 studentTwo.setPosition(currentPos.x-250, currentPos.y-80);

			 studentTwo.inFightScene = false;
		 //}
	 });


// right answer
goog.events.listen(correctButtonB, ['mousedown','touchstart'], function(e) {

		//generate random number
	/*  var randomStuff = Math.random();

		//the player hits!
		if(randomStuff < 0.5) {
				monster.life -= student.attack;

				//is he dead yet?
				if(monster.life <= 0) {
				*/
				var defeatedRectTwo = new lime.RoundedRect().setSize(950,240).setFill('#FFF').setPosition(480,160);
				defeatedRectTwo.setStroke(5,0,100,0,.5);
				fightBLayer.appendChild(defeatedRectTwo);
				var labelYouDefeatedTwo = new lime.Label().setSize(600,90).setText('YOU WON!!').setFill('#FFF').setPosition(420,130).setFontSize(38).setFontFamily('tahoma');
				fightBLayer.appendChild(labelYouDefeatedTwo);
				var labelYouLeveledUpTwo = new lime.Label().setSize(600,90).setText('YOU DEFEATED THE MONSTER AND SENT IT BACK THROUGH THE CRACK IN OUR WORLD. BIEN HECHO!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(420,210);
				fightBLayer.appendChild(labelYouLeveledUpTwo);
				var pabloHeadB = new lime.Sprite().setSize(250,250).setFill('img/pablobody.png').setPosition(785,175);
				fightBLayer.appendChild(pabloHeadB);

				var arrowFightB = new lime.Sprite().setSize(120, 120).setFill(arrowIntro.getFill()).setPosition(855,305);
				var fightBNextButton = new lime.GlossyButton().setSize(80,40).setPosition(840,308)
						.setText('NEXT').setColor('#FFF').setFontSize(20);
				fightBLayer.appendChild(arrowFightB);
				fightBLayer.appendChild(fightBNextButton);

				labelLabelB.setHidden(true);
				labelQuestionB.setHidden(true);
				correctButtonB.setHidden(true);
				incorrectButtonB.setHidden(true);


			var k = 0;


				goog.events.listen(fightBNextButton, ['mousedown','touchstart'], function(e) {



					if (k === 0) {


						levelUpSound.play();


							//**** YOU LEVELED UP LABELS *********************
						student.level++;
						var leveledUpRectTwo = new lime.RoundedRect().setSize(420,190).setFill('#FFF').setPosition(480,400);
						leveledUpRectTwo.setStroke(5,0,100,0,.5);
						fightBLayer.appendChild(leveledUpRectTwo);

						var labelYouLeveledUpTwo = new lime.Label().setSize(390,40).setText('YOU LEVELED UP!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(470,370);
						fightBLayer.appendChild(labelYouLeveledUpTwo);
						var labelNewLevel = new lime.Label().setSize(390,40).setText('LEVEL: ' + student.level).setFill('#FFF').setFontSize(27).setFontFamily('tahoma').setPosition(480,430);
						fightBLayer.appendChild(labelNewLevel);
						k++;
					}
					else {
						setTimeout(function(){
							//get the monster money
						 // student.money += monster.money;

							//go back to the map
						//	student.inFightScene = false;

							director.replaceScene(mapTwoScene);
							mapTwoLayer.setDirty(255)

							//delete the monster object
							monsterTwo.setHidden(true);
	 					 	delete monsterTwo;


							level.setText(student.level);

						}, 1500);
						k = 0;
					}
				})
			});

			/*	 goog.events.listen(correctButtonB, ['mousedown','touchstart'], function(e) {

		 				console.log("hello");
						 setTimeout(function(){

							 //go back to the map
						 //	student.inFightScene = false;

							 director.replaceScene(mapTwoScene);
							 mapLayer.setDirty(255)

							 //delete the monster object
							 monsterTwo.setHidden(true);
							 delete monsterTwo;

							 student.level++;
							 level.setText('Power Level: '+ student.level);
							 console.log(student.level);

//**** YOU WON LABELS *********************
							//  var labelYouDefeatedBlank = new lime.Label().setSize(255,60).setText(' ').setFill('#FFF').setPosition(470,100);
							//  mapLayer.appendChild(labelYouDefeatedBlank);
							//  var labelYouDefeated = new lime.Label().setSize(255,60).setText('YOU DEFEATED THE MONSTER!!').setFill('#FFF').setPosition(470,150);
							//  mapLayer.appendChild(labelYouDefeated);
							//  var labelYouLeveledUp = new lime.Label().setSize(255,60).setText('YOU HAVE LEVELED UP TO LEVEL 2!').setFill('#FFF').setPosition(470,200);
							//  mapLayer.appendChild(labelYouLeveledUp);
							//  var arrow = new lime.Sprite().setSize(75,50).setFill("arrow.png").setPosition(800,150);
							//  mapLayer.appendChild(arrow);
							//  console.log(student.level);

						 }, 1500);
					 });*/










		//******** MAP 3 *********************************

							var mapThreeScene = new lime.Scene();
							var mapThreeLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);

							var threeMap = new lime.Sprite().setSize(960, 640).setFill('map/frozenUpRight.png').setPosition(0,0).setAnchorPoint(0,0);
							//var student = new lime.Sprite().setSize(50,55).setFill('img/student.png').setPosition(100,100);
							var studentThree = new lime.Sprite().setSize(125,125).setFill(hero.getFill()).setPosition(480,580);
							var monsterThree = new lime.Sprite().setSize(225,225).setFill(monster.getFill()).setPosition(480,200);
							var crackD = new lime.Sprite().setSize(275,275).setFill(crackhorizontal.getFill()).setPosition(515,585);
							var transitionC = new lime.Sprite().setSize(100, 60).setPosition(70,320);

				//move to next map scene if transition is confronted
				studentTwo.inMapThreeScene = false;
									lime.scheduleManager.schedule(function(dt) {
										if(!this.inMapThreeScene) {
												if(goog.math.Box.intersects(this.getBoundingBox(),transitionB.getBoundingBox())) {
														director.replaceScene(mapThreeScene);
														mapThreeLayer.setDirty(255)
														studentTwo.inMapThreeScene = true;
													// var hello = new lime.Label().setSize(255,60).setText('HELLO!!').setFill('#FFF').setPosition(470,150);
													// mapTwoLayer.appendChild(hello);
												}
										}
									}, studentTwo);


						mapThreeLayer.appendChild(threeMap);
						mapThreeLayer.appendChild(studentThree);
						mapThreeLayer.appendChild(monsterThree);
				//		mapThreeLayer.appendChild(level);
				//		mapThreeLayer.appendChild(crackD)
						mapThreeLayer.appendChild(transitionC);
						mapThreeScene.appendChild(mapThreeLayer);

						//mapTwoLayer.appendChild(transition);

						goog.events.listen(threeMap, ['mousedown','touchstart'], function(e) {
								var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(1);
								var pos = studentThree.getPosition();
								console.log(pos.x);
								if (e.position.x < pos.x) {
									studentThree.setFill('img/studentLeft.png');
								}
								else {
									studentThree.setFill('img/hero.png');
								};
								studentThree.runAction(movement);
						//		startaudio.play();
						});

						studentThree.inFightScene = false;

						lime.scheduleManager.schedule(function(dt) {
							if(!this.inFightScene) {
									if (goog.math.Box.intersects(this.getBoundingBox(),monsterThree.getBoundingBox())) {
										var questNum = questionNumberfn();
										labelQuestionC.setText(questions[questNum]);
										correctButtonC.setText(answers[questNum][0]);
										incorrectButtonC.setText(answers[questNum][1]);
										director.replaceScene(fightCScene);
										fightCLayer.setDirty(255)
										studentThree.inFightScene = true;
									}
							}
						}, studentThree);



						//********* FIGHT SCENE THREE ****************************

					  var fightCScene = new lime.Scene().setRenderer();
					  var fightCLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
					  var fightCMap = new lime.Sprite().setSize(960, 640).setFill('fightScene.png').setPosition(0,0).setAnchorPoint(0,0);

					 //show the images of the monster and student
					  var studentFighterC = new lime.Sprite().setSize(student.getSize()).setFill(student.getFill()).setPosition(250,450);
					  var monsterFighterC = new lime.Sprite().setSize(monster.getSize()).setFill(monster.getFill()).setPosition(750, 430);
					 //	var everyMonster = new lime.Sprite();
					 //	everyMonster = fighterTwo;

					  fightCLayer.appendChild(fightCMap);
					  fightCLayer.appendChild(studentFighterC);
					  fightCLayer.appendChild(monsterFighterC);


					 //labels with characters stats

					 	 var labelQuestionC = new lime.Label().setSize(300,50).setFontFamily('Verdana').setFontSize(30).setFill('#FFF').setPosition(475,150);
					 	 var labelLabelC = new lime.Label().setSize(600,220).setText(' ').setFill('#FFF').setPosition(475,200);
					 	 labelLabelC.setStroke(5,0,100,0,.5);


					 //buttons for answer options
					 	 var correctButtonC = new lime.GlossyButton().setSize(90,40).setPosition(400,260)
					 			 .setColor("#cccccc");
					    var incorrectButtonC = new lime.GlossyButton().setSize(90,40).setPosition(540,260)
					 			 .setColor("#cccccc");



					 //********* FINISH - APPEND FIGHT SCENE ****************
					 	 fightCLayer.appendChild(labelLabelC);
					 	 fightCLayer.appendChild(labelQuestionC);
					 	 fightCLayer.appendChild(correctButtonC);
					 	 fightCLayer.appendChild(incorrectButtonC);
					 	 fightCScene.appendChild(fightCLayer);


					 // ******** FIGHT SCENE ACTIONS / RESULTS *********

					  //  wrong answer
					 	 goog.events.listen(incorrectButtonC, ['mousedown','touchstart'], function(e) {
					 			 //go back to the map
					 			 director.replaceScene(mapThreeScene);
					 			 mapThreeLayer.setDirty(255)

					 			 //move the student away from the monster, or the fight scene will be triggered again!
					 			 //this is just a quick, non-elegant way of doing this
					 			 currentPos = studentThree.getPosition();
					 			 studentThree.setPosition(currentPos.x-250, currentPos.y-80);

					 			 studentThree.inFightScene = false;

					 	 });


					 // right answer
					 goog.events.listen(correctButtonC, ['mousedown','touchstart'], function(e) {

					 				var defeatedRectThree = new lime.RoundedRect().setSize(950,240).setFill('#FFF').setPosition(480,160);
					 				defeatedRectThree.setStroke(5,0,100,0,.5);
					 				fightCLayer.appendChild(defeatedRectThree);
					 				var labelYouDefeatedThree = new lime.Label().setSize(600,90).setText('YOU WON!!').setFill('#FFF').setPosition(420,130).setFontSize(38).setFontFamily('tahoma');
					 				fightCLayer.appendChild(labelYouDefeatedThree);
					 				var labelYouLeveledUpThree = new lime.Label().setSize(600,90).setText('YOU DEFEATED THE MONSTER AND SENT IT BACK THROUGH THE CRACK IN OUR WORLD. BIEN HECHO!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(420,210);
					 				fightCLayer.appendChild(labelYouLeveledUpThree);
									var pabloHeadC = new lime.Sprite().setSize(250,250).setFill('img/pablobody.png').setPosition(785,175);
									fightCLayer.appendChild(pabloHeadC);

					 				var arrowFightC = new lime.Sprite().setSize(120, 120).setFill(arrowIntro.getFill()).setPosition(855,305);
					 				var fightCNextButton = new lime.GlossyButton().setSize(80,40).setPosition(840,308)
					 						.setText('NEXT').setColor('#FFF').setFontSize(20);
					 				fightCLayer.appendChild(arrowFightC);
					 				fightCLayer.appendChild(fightCNextButton);

					 				labelLabelC.setHidden(true);
					 				labelQuestionC.setHidden(true);
					 				correctButtonC.setHidden(true);
					 				incorrectButtonC.setHidden(true);


					 			var k = 0;

					 				goog.events.listen(fightCNextButton, ['mousedown','touchstart'], function(e) {



					 					if (k === 0) {

					 					//	levelUpSound.play();
										//	student.level++;

					 							//**** YOU LEVELED UP LABELS *********************

											// 	var leveledUpRectThree = new lime.RoundedRect().setSize(420,190).setFill('#FFF').setPosition(480,400);
											// 	leveledUpRectThree.setStroke(5,0,100,0,.5);
											// 	fightCLayer.appendChild(leveledUpRectThree);
											//
											// 	var labelYouLeveledUpThree = new lime.Label().setSize(390,40).setText('YOU LEVELED UP!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(470,370);
											// 	fightCLayer.appendChild(labelYouLeveledUpThree);
											// 	var labelNewLevelThree = new lime.Label().setSize(390,40).setText('LEVEL: ' + student.level).setFill('#FFF').setFontSize(27).setFontFamily('tahoma').setPosition(480,430);
											// 	fightCLayer.appendChild(labelNewLevelThree);
					 						k++;
					 					}
					 					else {
					 						setTimeout(function(){

			 							//go back to the map
					 						//	student.inFightScene = false;

					 							director.replaceScene(mapThreeScene);
					 							mapThreeLayer.setDirty(255)

					 							//delete the monster object
					 							monsterThree.setHidden(true);
					 	 					 	delete monsterThree;

					 							level.setText('Power Level: '+ student.level);

					 						}, 1500);
					 						k = 0;
					 					}
					 				})
					 			});









						//******** MAP 4 *********************************

								var mapFourScene = new lime.Scene();
								var mapFourLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);

								var fourMap = new lime.Sprite().setSize(960, 640).setFill('map/frozenT.png').setPosition(0,0).setAnchorPoint(0,0);
								//var student = new lime.Sprite().setSize(50,55).setFill('img/student.png').setPosition(100,100);
								var studentFour = new lime.Sprite().setSize(125,125).setFill(hero.getFill()).setPosition(930,300);
								var monsterFour = new lime.Sprite().setSize(225,225).setFill('monsterRt.png').setPosition(480,200);
								var tradingpost = new lime.Sprite().setSize(195,195).setFill('tradingpost300.png').setPosition(215,475);
								var crackE = new lime.Sprite().setSize(275,275).setFill(crackhorizontal.getFill()).setPosition(515,585);
								var transitionD = new lime.Sprite().setSize(100, 60).setPosition(70,320);

								//move to next map scene if transition is confronted
								studentThree.inMapFourScene = false;
													lime.scheduleManager.schedule(function(dt) {
														if(!this.inMapFourScene) {
																if(goog.math.Box.intersects(this.getBoundingBox(),transitionC.getBoundingBox())) {
																		director.replaceScene(mapFourScene);
																		mapFourLayer.setDirty(255)
																		studentThree.inMapFourScene = true;
																	// var hello = new lime.Label().setSize(255,60).setText('HELLO!!').setFill('#FFF').setPosition(470,150);
																	// mapTwoLayer.appendChild(hello);
																}
														}
													}, studentThree);



										mapFourLayer.appendChild(fourMap);
										mapFourLayer.appendChild(studentFour);
										mapFourLayer.appendChild(monsterFour);
										mapFourLayer.appendChild(tradingpost);
								//		mapFourLayer.appendChild(crackD)
										mapFourScene.appendChild(mapFourLayer);

										//mapTwoLayer.appendChild(transition);

										goog.events.listen(fourMap, ['mousedown','touchstart'], function(e) {
												var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(1);
												var pos = studentFour.getPosition();
												if (e.position.x < pos.x) {
													studentFour.setFill('img/studentLeft.png');
												}
												else {
													studentFour.setFill('img/hero.png');
												};
												studentFour.runAction(movement);
										//		startaudio.play();
										});

										studentFour.inFightScene = false;

										lime.scheduleManager.schedule(function(dt) {
											if(!this.inFightScene) {
													if (goog.math.Box.intersects(this.getBoundingBox(),monsterFour.getBoundingBox())) {
														var questNum = questionNumberfn();
														labelQuestionD.setText(questions[questNum]);
														correctButtonD.setText(answers[questNum][0]);
														incorrectButtonD.setText(answers[questNum][1]);
														director.replaceScene(fightDScene);
														fightDLayer.setDirty(255)
														studentFour.inFightScene = true;
													//	everyMonster = monsterTwo;
													}
											}
										}, studentFour);


										studentFour.inTradingScene = false;
										lime.scheduleManager.schedule(function(dt) {
											if(!this.inTradingScene) {
													if (goog.math.Box.intersects(this.getBoundingBox(),tradingpost.getBoundingBox())) {
															director.replaceScene(tradingScene);
															tradingLayer.setDirty(255)
															studentFour.inTradingScene = true;
														// var hello = new lime.Label().setSize(255,60).setText('HELLO!!').setFill('#FFF').setPosition(470,150);
														// mapTwoLayer.appendChild(hello);
														var nafi = new Audio('audio/Tavern3.m4a');
														nafi.play();

													}
											}
										}, studentFour);
										//********* FIGHT SCENE FOUR ****************************

										var fightDScene = new lime.Scene().setRenderer();
										var fightDLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
										var fightDMap = new lime.Sprite().setSize(960, 640).setFill('fightScene.png').setPosition(0,0).setAnchorPoint(0,0);

										//show the images of the monster and student
										var studentFighterD = new lime.Sprite().setSize(student.getSize()).setFill(student.getFill()).setPosition(250,450);
										var monsterFighterD = new lime.Sprite().setSize(monster.getSize()).setFill(monster.getFill()).setPosition(750, 430);
										//	var everyMonster = new lime.Sprite();
										//	everyMonster = fighterTwo;

										fightDLayer.appendChild(fightDMap);
										fightDLayer.appendChild(studentFighterD);
										fightDLayer.appendChild(monsterFighterD);


										//labels with characters stats

										var labelQuestionD = new lime.Label().setSize(300,50).setFontFamily('Verdana').setFontSize(30).setFill('#FFF').setPosition(475,150);
										var labelLabelD = new lime.Label().setSize(600,220).setText(' ').setFill('#FFF').setPosition(475,200);
										labelLabelD.setStroke(5,0,100,0,.5);


										//buttons for answer options
										var correctButtonD = new lime.GlossyButton().setSize(90,40).setPosition(400,260)
											 .setColor("#cccccc");
										var incorrectButtonD = new lime.GlossyButton().setSize(90,40).setPosition(540,260)
											 .setColor("#cccccc");



										//********* FINISH - APPEND FIGHT SCENE ****************
										fightDLayer.appendChild(labelLabelD);
										fightDLayer.appendChild(labelQuestionD);
										fightDLayer.appendChild(correctButtonD);
										fightDLayer.appendChild(incorrectButtonD);
										fightDScene.appendChild(fightDLayer);


										// ******** FIGHT SCENE ACTIONS / RESULTS *********

										//  wrong answer
										goog.events.listen(incorrectButtonD, ['mousedown','touchstart'], function(e) {
											 //go back to the map
											 director.replaceScene(mapFourScene);
											 mapFourLayer.setDirty(255)

											 //move the student away from the monster, or the fight scene will be triggered again!
											 //this is just a quick, non-elegant way of doing this
											 currentPos = studentFour.getPosition();
											 studentFour.setPosition(currentPos.x-250, currentPos.y-80);

											 studentFour.inFightScene = false;

										});


										// right answer
										goog.events.listen(correctButtonD, ['mousedown','touchstart'], function(e) {

												var defeatedRectFour = new lime.RoundedRect().setSize(950,240).setFill('#FFF').setPosition(480,160);
												defeatedRectFour.setStroke(5,0,100,0,.5);
												fightDLayer.appendChild(defeatedRectFour);
												var labelYouDefeatedFour = new lime.Label().setSize(600,90).setText('YOU WON!!').setFill('#FFF').setPosition(420,130).setFontSize(38).setFontFamily('tahoma');
												fightDLayer.appendChild(labelYouDefeatedFour);
												var labelYouLeveledUpFour = new lime.Label().setSize(600,90).setText('YOU DEFEATED THE MONSTER AND SENT IT BACK THROUGH THE CRACK IN OUR WORLD. BIEN HECHO!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(420,210);
												fightDLayer.appendChild(labelYouLeveledUpFour);
												var pabloHeadD = new lime.Sprite().setSize(250,250).setFill('img/pablobody.png').setPosition(785,175);
												fightDLayer.appendChild(pabloHeadD);

												var arrowFightD = new lime.Sprite().setSize(120, 120).setFill(arrowIntro.getFill()).setPosition(855,305);
												var fightDNextButton = new lime.GlossyButton().setSize(80,40).setPosition(840,308)
														.setText('NEXT').setColor('#FFF').setFontSize(20);
												fightDLayer.appendChild(arrowFightD);
												fightDLayer.appendChild(fightDNextButton);

												labelLabelD.setHidden(true);
												labelQuestionD.setHidden(true);
												correctButtonD.setHidden(true);
												incorrectButtonD.setHidden(true);


											var p = 0;

												goog.events.listen(fightDNextButton, ['mousedown','touchstart'], function(e) {



													if (p === 0) {

														levelUpSound.play();
														student.level++;


															//**** YOU LEVELED UP LABELS *********************

														var leveledUpRectFour = new lime.RoundedRect().setSize(420,190).setFill('#FFF').setPosition(480,400);
														leveledUpRectFour.setStroke(5,0,100,0,.5);
														fightDLayer.appendChild(leveledUpRectFour);

														var labelYouLeveledUpFour = new lime.Label().setSize(390,40).setText('YOU LEVELED UP!').setFill('#FFF').setFontSize(24).setFontFamily('tahoma').setPosition(470,370);
														fightDLayer.appendChild(labelYouLeveledUpFour);
														var labelNewLevelFour = new lime.Label().setSize(390,40).setText('LEVEL: ' + student.level).setFill('#FFF').setFontSize(27).setFontFamily('tahoma').setPosition(480,430);
														fightDLayer.appendChild(labelNewLevelFour);
														p++;
													}
													else {
														setTimeout(function(){

													//go back to the map
														//	student.inFightScene = false;

															director.replaceScene(mapFourScene);
															mapFourLayer.setDirty(255)

															//delete the monster object
															monsterFour.setHidden(true);
															delete monsterFour;

															level.setText('Power Level: '+ student.level);

														}, 1500);
														p = 0;
													}
												})
											});





			}


































/*
var mapScene = new lime.Scene();
var mapLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);

var gameMap = new lime.Sprite().setSize(352,256).setFill('map.png').setPosition(0,0).setAnchorPoint(0,0);

mapLayer.appendChild(gameMap);
mapScene.appendChild(mapLayer);
*/

/*
//set main namespace
goog.provide('rpg_tutorial');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');


// entrypoint
rpg_tutorial.start = function(){

	var director = new lime.Director(document.body,1024,768),
	    scene = new lime.Scene(),

	    target = new lime.Layer().setPosition(512,384),
        circle = new lime.Circle().setSize(150,150).setFill(255,150,0),
        lbl = new lime.Label().setSize(160,50).setFontSize(30).setText('TOUCH ME!'),
        title = new lime.Label().setSize(800,70).setFontSize(60).setText('Now move me around!')
            .setOpacity(0).setPosition(512,80).setFontColor('#999').setFill(200,100,0,.1);


    //add circle and label to target object
    target.appendChild(circle);
    target.appendChild(lbl);

    //add target and title to the scene
    scene.appendChild(target);
    scene.appendChild(title);

	director.makeMobileWebAppCapable();

    //add some interaction
    goog.events.listen(target,['mousedown','touchstart'],function(e){

        //animate
        target.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(.5).setDuration(.2),
            new lime.animation.ScaleTo(1.5).setDuration(.8)
        ));

        title.runAction(new lime.animation.FadeTo(1));

        //let target follow the mouse/finger
        e.startDrag();

        //listen for end event
        e.swallow(['mouseup','touchend'],function(){
            target.runAction(new lime.animation.Spawn(
                new lime.animation.FadeTo(1),
                new lime.animation.ScaleTo(1),
                new lime.animation.MoveTo(512,384)
            ));

            title.runAction(new lime.animation.FadeTo(0));
        });


    });

	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('rpg_tutorial.start', rpg_tutorial.start);
*/
