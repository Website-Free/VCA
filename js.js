//quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    quess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer))  {
            this.score++;
    }
    this.questionIndex++;
}
isEnded(){
    return this.questionIndex === this.questions.length;
}
}
// question class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

     isCorrectAnswer(choice) {
        return this.answer === choice;
     }
    }
// display question
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            quess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

// Function
function quess(id, quess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.quess(quess);
        displayQuestion();
    }
}
// show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
    `Intrebarea ${currentQuestionNumber} din ${quiz.questions.length}`;
}

// show sco
function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Complet,trebuie corecte 28 din 40 de intrebari.<h1>
    <h2 id="score">Scorul tau: ${quiz.score} din ${quiz.
    questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Incearca din nou.</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}
// Create quiz question 
let questions = [
    new Question(
        "Sarcina ta este să demolezi o cameră cu sistem de încălzire. Observați o placă fibroasă albă sub instalație. Bănuiți că aveți de-a face cu azbest. Ce ai de facut?",[" Rupeți o piesă și analizați-o în laborator.","Avertizați supraveghetorul și clientul.","Udați placa, așezați-o cu atenție în folia de plastic și scoateți-o.","Toate de mai sus."], "Avertizați supraveghetorul și clientul."
    ),
    new Question(
        "Sarcina dvs. este să îndepărtați îmbinările de ciment de pe peretele exterior la o înălțime de 10 m. Munca va dura o săptămână întreagă. Nivelul de zgomot este de 75 dB (A). Ce măsuri trebuie să luați pentru a lucra într-un mediu sigur? ",["Purtarea protecției auditive.","Utilizarea unei scări cu înălțimea de min. 12 m.","Punerea hamului.","Utilizarea unui schele connforme."], "Utilizarea unui schele connforme."
    ),
    new Question(
        "Sarcina lui Alexandru este demolarea unei structuri împreună cu colegii. Andrei este titularul unui permis de muncă. Permisul este valabil o zi",["Andrei trebuie să verifice dacă colegii de muncă respectă condițiile permisului.","După finalizarea tuturor lucrărilor, colegii trebuie să semneze un permis de muncă.","Firma autorizarta trebuie să explice asociației Andrei ce implica munca lor.","Poate sa lucreze 7 zile"], "Andrei trebuie să verifice dacă colegii de muncă respectă condițiile permisului."
    ),
    new Question(
        "De ce ar trebui întotdeauna derulați complet un cablu prelungitor?",["Toate variantele de mai jos","Pentru a verifica dacă cablul nu este deteriorat.","Pentru a preveni câmpurile electromagnetice.","Pentru a preveni generarea de căldură nedorită."], "Pentru a preveni generarea de căldură nedorită."
    ),
    new Question(
        "Tu trebuie să inspectați marginea proeminentă a acoperișului clădirii de birouri. Clădirea are 5 etaje. Pe acoperișul plat nu există securitate la capete. Cum puteți efectua inspecția în siguranță?",[" De la schele montate pe fațadă","Pe oricare schela","De pe o scară sprijinită pe fațadă.","De la pasarela de pe acoperiș."], " De la schele montate pe fațadă"
    ),
    new Question(
        "Ce este steigerkaart (cardul de schele)?",["Denumirea schelei","Are numărul certificatului muncitorului de schele."," Puteți citi datele inspecției și sistemul de schele din acesta.","Indică dacă schela este sigură de utilizat"], "Indică dacă schela este sigură de utilizat"
    ),
    new Question(
        "Care afirmație este corectă?",["O analiză a riscului în ultimul moment ar trebui efectuată la sfârșitul sarcinii."," O analiză de risc în ultimul moment nu este necesară dacă este disponibilă o analiză de risc bazată pe sarcini.","Analiza riscurilor de ultim moment este controlul siguranței la locul de muncă.","O analiză de risc în ultimul moment trebuie efectuata de inginer."], "Analiza riscurilor de ultim moment este controlul siguranței la locul de muncă."
    ),
    new Question(
        "Responsabilitatea principală pentru siguranța la locul de muncă revine:",["Paznicul","Inspecția muncii","Angajatului uzinei"," Angajatorul"], " Angajatorul"
    ),
    new Question(
        "Ce determină nivelul de risc în timpul muncii?",["De acasa."," De la supravegherea exercitată de client.","Din planul de sănătate și siguranță (plan V & G)."," De la locul de muncă."], " De la locul de muncă."
    ),
    new Question(
        "Care sunt diferitele faze in controlul și rezolvarea accidentelor?",["reportarea unui incident, ridicarea barierelor, implementarea activităților, încheierea incidentului."," la începutul Raportării incidentului, informarea pompierilor, terminarea pompierilor, terminarea pompierilor,","La început: reportarea unui incident, clasificarea incidentului, implementarea acțiunilor.","Raportarea unui incident."], "La început: reportarea unui incident, clasificarea incidentului, implementarea acțiunilor."
    ),
    new Question(
        "Dragos lucreaza în incinta fabricii. Dragos lucrează singur și locul de muncă este zgomotos. Crede că aude o alarmă de scurgere a gazului. Dar Dragos nu este sigur. Ce ar trebui să facă??",["Sa continuie munca.","Mergeți direct la punctul de întâlnire.","Apelați serviciul și întrebați dacă alarma a fost declanșată.","Sunați-l pe șef și întrebați-l dacă poate continua să lucreze."], "Mergeți direct la punctul de întâlnire."
    ),
    new Question(
        "Care este riscul de benzen?",["Toxic.","Benzenul este o substanță dăunătoare.","Benzenul este un plastic","Benzenul este un cancerigen."], "Benzenul este un cancerigen."
    ),
    new Question(
        "Ce ar trebui să fac când folosesc lanțul?",["Nici un raspuns, nu este corect.","Să ungeți lanțul înainte de utilizare.","Strângeți în siguranță șuruburile bornei.","Lucrările trebuie efectuate de către doi oameni."], "Strângeți în siguranță șuruburile bornei."
    ),
    new Question(
        "Când este imposibil să lucrezi la înălțime?",["Când forța vântului depășește 4 grade.","când forța vântului depășește 5 grade.","Cand forța vântului depășește 3 grade.","Când forța vântului depășește 6 grade."], "Când forța vântului depășește 6 grade."
    ),
    new Question(
        "Care din urmatoarele este corecta:LMRA Analiza riscului in ultimul minut?",["LMRA trebuie facuta la incheierea activitatii.","Toate variantele sunt gresite.","LMRA nu este necesara daca exista inventar de evaluare a riscurilor la locul de munca"," LMRA consta in controlarea securitatii la locul de munca."], "LMRA consta in controlarea securitatii la locul de munca."
    ),
    new Question(
        "Ce este important atunci când ridicaţi manual un obiect aflat pe jos?",["Să puteţi întoarce lateral obiectul după ridicare. ","Să ridicaţi obiectul cu spatele drept şi genunchii îndoiţi.","Sa indepartati cat mau mult picioarele.","Sa ridicati cu bratele drepte."], "Să ridicaţi obiectul cu spatele drept şi genunchii îndoiţi."
    ),
    new Question(
        "Când trebuie să purtaţi ochelarii de protecţie?",["La polizare, tăiere şi găurire.","Nici o varianta nu este corecta.","La sudurile autogene","La cuplarea şi decuplarea furtunurilor produsului. "], "La polizare, tăiere şi găurire."
    ),
    new Question(
        "Cum trebuie plasată o butelie de acetilenă în timpul sudării?",["Butelia trebuie să stea într-un unghi de cel puţin 30° faţă de podea. ","Butelia trebuie să stea numai în poziţie laterala.","Butelia trebuie să stea numai în poziţie verticală.","Butelia poate fi aşezată orizontal pe podea. "], "Butelia trebuie să stea într-un unghi de cel puţin 30° faţă de podea. "
    ),
    new Question(
        "Care este unul dintre riscurile utilizării unui motostivuitor?",["Stricarea aparatului","Afectarea auzului celor din jur. "," Accidentarea persoanelor. ","Murdărirea sarcinii. "], " Accidentarea persoanelor. "
    ),
    new Question(
        "Care este unghiul maxim al celor două lanțuri suspendate de care este atașată sarcina?",["45°","90°","150°","120°"], "120°"
    ),
    new Question(
        "La ce înălțime ar trebui să se utilizeze dispozitive anti-cădere?",["De la 1 metru.","De la 2 metri.","De la 3 metri.","Peste 2,5 metri."], "De la 2 metri."
    ),
    new Question(
        "Temperatura de autoaprindere este …",["cea mai scăzută temperatură la care lichidul se poate aprinde din lumină","cea mai mica temperatură la care substanța aprinde","cea mai mare temperatură la care substanța aprinde","cea mai scăzută temperatură la care o substanță se auto-aprinde fără o sursă de aprindere externă"], "cea mai scăzută temperatură la care o substanță se auto-aprinde fără o sursă de aprindere externă"
    ),
    new Question(
        "Aveți o etichetă veche a substanței periculoase. Unde sunt informațiile despre măsurile de securitate?",["Pe baza descrierii de sub litera M.","Pe baza descrierii de sub litera R.","Pe baza descrierii de sub litera P.","Pe baza descrierii de sub litera S."], "Pe baza descrierii de sub litera S."
    ),
    new Question(
        "Ce este analiza riscului de activitate (TRA)?",[" Analiza scrisă a riscurilor care pot apărea în timpul lucrului cu cel mai mic grad de risc.","O listă scrisă a lucrărilor care pot duce la amenințări în întreprindere."," Analiza scrisă a riscurilor care pot apărea în timpul lucrului cu cel mai înalt grad de risc.","Evaluarea scrisă a sarcinilor enumerate în documentul de recunoaștere și evaluare a pericolelor."], " Analiza scrisă a riscurilor care pot apărea în timpul lucrului cu cel mai înalt grad de risc."
    ),
    new Question(
        "Când, conform prevederilor Legii privind condițiile de muncă, ar trebui să încetez munca?",["Daca colegu iti spune"," În caz de condiții meteorologice nefavorabile","În caz de pericol","Dacă lucrarea durează mai mult de 3 ore"], "În caz de pericol"
    ),
    new Question(
        "Stingătorul cu spumă funcționează pe principiul :",["răcind sursa de incendiu.","Congelare."," răcind și deplasând catalizatorul de oxigen."," întreruperea alimentării cu oxigen."], " întreruperea alimentării cu oxigen."
    ),
    new Question(
        "Selectați o trăsătură care este caracteristică unui spațiu închis",["Exista doar o intrare.","Există puțin oxigen în cameră","Nu există nici o ventilație naturală.","Are o singură intrare și o ieșire."], "Nu există nici o ventilație naturală."
    ),
    new Question(
        "Pentru a lucra în condiții de siguranță în spații închise, trebuie să:",["Efectuați lucrări de cel puțin două persoane.","Puteti lucra si singur.","Testați semnalele de alarmă."," Angajați 2 gardieni."], "Efectuați lucrări de cel puțin două persoane."
    ),
    new Question(
        "Ce poate fi cauzat de zgomotul excesiv?",["Dureri de cap.","Inflamația urechii medii.","Cefalee cronică."," Hipoacuzie permanentă."], " Hipoacuzie permanentă."
    ),
    new Question(
        "Cum se produce electricitatea statică?",["Toate variantele.","Prin curgerea curentului electric prin electrodul de pământ.","Prin atingerea părților sub tensiune.","Prin frecare între aer, substanțe (lichide), materiale și obiecte."], "Prin frecare între aer, substanțe (lichide), materiale și obiecte."
    ),
    new Question(
        "Valoarea curentului de șoc electric depinde de:",["rezistenta"," intensitatea, tensiunea, rezistența temperaturii.","durata atingerii"," substratului"], " intensitatea, tensiunea, rezistența temperaturii."
    ),
    new Question(
        "Toate mașinile electrice trebuie verificate de un specialist:",["o dată pe an.","După fiecare reparație.","La 2 ani.","La fiecare 5 ani."], "o dată pe an."
    ),
    new Question(
        "Cum este securizată o gaură minim periculoasă în perete sau o șanț adânc?",["Pune un gard.","Puneți o Bandă de plastic.","Toate Variantele","Postați un semn de avertizare."], "Pune un gard."
    ),
    new Question(
        "Puteți citi capacitatea maximă de încărcare a centurii din:",["Manual","Incărcătura fiind ridicată.","Ambalaj","Pe banda de autocolant."], "Pe banda de autocolant."
    ),
    new Question(
        "Cum stingem un incendiu de echipamente electrice?",["Toate variantele de mai jos.","cu Apă"," CO2 sau pulbere.","O pătură"], " CO2 sau pulbere."
    ),
    new Question(
        "Funcționarea stingătorului cu CO2 se bazează pe :",[" Înlocuirea oxigenului.","Congelare","Inghetare","Acționând ca un catalizator negativ"], " Înlocuirea oxigenului."
    ),
    new Question(
        "Punctul de aprindere este …",[" cea mai scăzută temperatură la care un lichid poate lua foc de la lumina.","cea mai scăzută temperatură la care se formează vapori inflamabili, care poate să fie aprins de o scânteie.","cea mai ridicată temperatură la care un lichid se poate aprinde de la o scânteie.","cea mai mica temperatură la care un lichid se poate aprinde de la o scânteie."], "cea mai scăzută temperatură la care se formează vapori inflamabili, care poate să fie aprins de o scânteie."
    ),
    new Question(
        "Scopul raportului de amenințare și al evaluării riscurilor este?",["Angajatorul trebui sa se ocupe.","Ascunderea amenințărilor existente","Eliminarea tuturor amenințărilor","Controlul riscurilor"], "Controlul riscurilor"
    ),
    new Question(
        "Ce impune angajatorul, Legea privind condițiile de muncă?",[" Furnizați echipamente de protecție personală angajaților","Masina personala.","Abordați doar pericolele care ar putea duce la un accident"," Asigurați o masă caldă la locul de muncă"], " Furnizați echipamente de protecție personală angajaților"
    ),
    new Question(
        "Trebuie să lucrezi într-o cameră închisă. Măsurătorile arată că concentrația de oxigen este de 18%. Ce trebuie să faci pentru a începe să lucrezi?",["Ventilați camera în mod mecanic și măsurați din nou concentrația de oxigen.","Folosiți o mască de filtrare","Nimic, concentrația de oxigen este suficient de mare.","Folositi un prosop"], "Ventilați camera în mod mecanic și măsurați din nou concentrația de oxigen.a"
    ),
];



let quiz = new Quiz(questions);

//display question
displayQuestion();

// Time
let time = 60;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Timpul: ${min} : ${sec}`;

        }
    }, 6000) 
}
startCountdown();

function curand() {
    alert("In curand");
  }
