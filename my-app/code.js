// Lists generated via the data gathered from Aircraft List data table.
var speedList = getColumn("Aircraft List", "Top Speed");
var generationList = getColumn("Aircraft List", "Generation");
var payloadList = getColumn("Aircraft List", "Max Load");
var flagList = getColumn("Aircraft List", "Operator");
var aircraftList = getColumn("Aircraft List", "Aircraft");
var aircraftPictureList = getColumn("Aircraft List", "Picture");

// Global variables established to compare user guess and the correct answer.
// correctPhoto stores image of correct aircraft do display upon the right answer.
var correctAircraft = "";
var correctPhoto;
var guessInput = "";

// Inital call to function in order to generate the first series of outputs for the question.
newQuestion();

// Button that gathers selected input/guess from the dropdown presented on click.
// Calls for the checkAnswer() function, using the guessInput and correctAircraft
// variables for the procedure.
onEvent("guessButton", "click", function( ){
  guessInput = getText("choiceDropdown");
  checkAnswer(guessInput, correctAircraft);
});

// Generates an new question by calling the newQuestion() function on click.
// Hides photo of aircraft and displays "Next!" to reset the question.
onEvent("nextQuestionButton", "click", function( ){
  newQuestion();
  hideElement("aircraftPhoto");
  setText("aircraftLabel", "Next!");
});

// Generates a new question by selected a random number, then assigning it to the local variable: index.
// Assigns and sets text and properties via lists, which uniformly select which information to display by
// the number chosen from the index.
function newQuestion(){
  var index = randomNumber(0, aircraftList.length);
  correctAircraft = aircraftList[index];
  correctPhoto = aircraftPictureList[index];
  for(var i = 0; i < aircraftList.length; i++){
    if(correctAircraft == aircraftList[i]){
      setProperty("countryFlag", "image", flagList[i]);
      setText("speedRandom", "Mach " + speedList[i]);
      setText("generationRandom", generationList[i]);
      setText("payloadRandom", payloadList[i]);
    }
  }
}

// Compares user answer and correct answer to evaluate if the answer is correct or not.
// Unhides and displays photo of aircraft once correct answer is reached.
// guessAnswer {string} - the aircraft the user selected.
// correctAnswer {string} - the correct answer selected by the index in newQuestion().
function checkAnswer(guessAnswer, correctAnswer){
  if(guessAnswer == correctAnswer){
    setProperty("aircraftPhoto", "image", correctPhoto);
    showElement("aircraftPhoto");
    setText("aircraftLabel", "Bingo! Good job!");
  } else {
    setText("aircraftLabel", "Sorry, incorrect!");
  }
}

// Cited photographs from data table:
// usaFlag - https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png
// russiaFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/960px-Flag_of_Russia.svg.png
// germanyFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/3840px-Flag_of_Germany.svg.png
// swedenFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png
// japanFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png
// ukFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png
// franceFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png
// pakistanFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/3840px-Flag_of_Pakistan.svg.png
// chinaFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/3840px-Flag_of_the_People%27s_Republic_of_China.svg.png
// italyFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png
// skFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/3840px-Flag_of_South_Korea.svg.png
// taiwanFlag - https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1280px-Flag_of_the_Republic_of_China.svg.png
// raptorPhoto - https://upload.wikimedia.org/wikipedia/commons/4/46/Lockheed_Martin_F-22A_Raptor_JSOH.jpg
// felonPhoto - https://www.twz.com/wp-content/uploads/2025/11/su-57-updates-dubai-airshow.jpg?quality=85
// tornadoPhoto - https://www.flyajetfighter.com/wp-content/uploads/2023/03/panavia-tornado-ECR-1-1024x636.jpg
// gripenPhoto - https://www.19fortyfive.com/wp-content/uploads/2025/05/JAS-39-Gripen-E-Fighter.jpg
// falconPhoto - https://nationalsecurityjournal.org/wp-content/uploads/2025/07/F-16-Fighter-from-U.S.-Air-Force-Flying-High.jpg
// viperzeroPhoto - https://i0.wp.com/www.zona-militar.com/wp-content/uploads/2025/06/F-2-Fighter-Aircraft-from-Japan.webp?resize=1220%2C813&ssl=1
// eaglePhoto - https://upload.wikimedia.org/wikipedia/commons/a/a6/F-15C_Eagle_from_the_44th_Fighter_Squadron_flies_during_a_routine_training_exercise_April_15%2C_2019.jpg
// strikeeaglePhoto - https://upload.wikimedia.org/wikipedia/commons/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg
// superhornetPhoto - https://www.twz.com/wp-content/uploads/2024/08/Hornet-F18-Jordan.jpg?strip=all&quality=85&w=1024
// thunderboltPhoto - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg/1280px-Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg
// typhoonPhoto - https://cdn.shopify.com/s/files/1/0360/4209/t/49/assets/typhoon-1693193788397_1000x.png?v=1693193789
// flankerPhoto - https://militarywatchmagazine.com/m/articles/2022/01/22/article_61ebff3675cfc5_58450208.jpeg
// fulcrumPhoto - https://warriormaven.com/.image/MTk5NTEwODI2OTI5ODkwNDA3/mig-35-1-e1663008469573.jpg
// fullbackPhoto - https://www.twz.com/wp-content/uploads/images-by-url-twz/content/2022/01/Su34-Wing-Tanks.jpg?quality=85
// miragePhoto - https://theaviationist.com/wp-content/uploads/2025/01/Mirage2000-5F_Ukraine_Training_1.jpg
// rafalePhoto - https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/2/files/2015/02/W1I0345-1.jpg
// thunderPhoto - https://upload.wikimedia.org/wikipedia/commons/5/5d/Pakistan_JF-17_%28modified%29.jpg
// lightningPhoto - https://www.brighton-science.com/hs-fs/hubfs/images/blog-images/f35-lightning-ii-strike-fighter.jpeg?width=850&height=496&name=f35-lightning-ii-strike-fighter.jpeg
// mightydragonPhoto - https://upload.wikimedia.org/wikipedia/commons/7/73/J-20_at_CCAS2022_%2820220827103424%29.jpg
// vigorousdragonPhoto - https://upload.wikimedia.org/wikipedia/commons/1/18/PLAAF_Xian_JH-7A_at_Chelyabinsk_Shagol_Air_Base.jpg
// flyingleopardPhoto - https://upload.wikimedia.org/wikipedia/commons/1/18/PLAAF_Xian_JH-7A_at_Chelyabinsk_Shagol_Air_Base.jpg
// ghilbiPhoto - https://aviationweek.com/sites/default/files/styles/crop_freeform/public/uploads/2019/02/df-venicepromotonyosborne-awst.jpg?itok=oQ4I9mA-
// frogfootPhoto - https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg/1280px-Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg
// boramaePhoto - https://thedefensepost.com/wp-content/uploads/2025/08/1200px-KAI_KF-X.jpeg
// goldeneaglePhoto - https://www.airforce-technology.com/wp-content/uploads/sites/6/2020/05/Image-1-FA-50-Fighting-Eagle.jpg
// chingkuoPhoto - https://upload.wikimedia.org/wikipedia/commons/7/7d/IDF-Wan_Chien.jpg