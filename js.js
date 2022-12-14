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
    <h1>Quiz Completat,trebuie corecte 28 din 40 de intrebari.<h1>
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
        "Sarcina ta este s?? demolezi o camer?? cu sistem de ??nc??lzire. Observa??i o plac?? fibroas?? alb?? sub instala??ie. B??nui??i c?? ave??i de-a face cu azbest. Ce ai de facut?",[" Rupe??i o pies?? ??i analiza??i-o ??n laborator.","Avertiza??i supraveghetorul ??i clientul.","Uda??i placa, a??eza??i-o cu aten??ie ??n folia de plastic ??i scoate??i-o.","Toate de mai sus."], "Avertiza??i supraveghetorul ??i clientul."
    ),
    new Question(
        "Sarcina dvs. este s?? ??ndep??rta??i ??mbin??rile de ciment de pe peretele exterior la o ??n??l??ime de 10 m. Munca va dura o s??pt??m??n?? ??ntreag??. Nivelul de zgomot este de 75 dB (A). Ce m??suri trebuie s?? lua??i pentru a lucra ??ntr-un mediu sigur? ",["Purtarea protec??iei auditive.","Utilizarea unei sc??ri cu ??n??l??imea de min. 12 m.","Punerea hamului.","Utilizarea unui schele connforme."], "Utilizarea unui schele connforme."
    ),
    new Question(
        "Sarcina lui Alexandru este demolarea unei structuri ??mpreun?? cu colegii. Andrei este titularul unui permis de munc??. Permisul este valabil o zi",["Andrei trebuie s?? verifice dac?? colegii de munc?? respect?? condi??iile permisului.","Dup?? finalizarea tuturor lucr??rilor, colegii trebuie s?? semneze un permis de munc??.","Firma autorizarta trebuie s?? explice asocia??iei Andrei ce implica munca lor.","Poate sa lucreze 7 zile"], "Andrei trebuie s?? verifice dac?? colegii de munc?? respect?? condi??iile permisului."
    ),
    new Question(
        "De ce ar trebui ??ntotdeauna derula??i complet un cablu prelungitor?",["Toate variantele de mai jos","Pentru a verifica dac?? cablul nu este deteriorat.","Pentru a preveni c??mpurile electromagnetice.","Pentru a preveni generarea de c??ldur?? nedorit??."], "Pentru a preveni generarea de c??ldur?? nedorit??."
    ),
    new Question(
        "Tu trebuie s?? inspecta??i marginea proeminent?? a acoperi??ului cl??dirii de birouri. Cl??direa are 5 etaje. Pe acoperi??ul plat nu exist?? securitate la capete. Cum pute??i efectua inspec??ia ??n siguran?????",[" De la schele montate pe fa??ad??","Pe oricare schela","De pe o scar?? sprijinit?? pe fa??ad??.","De la pasarela de pe acoperi??."], " De la schele montate pe fa??ad??"
    ),
    new Question(
        "Ce este steigerkaart (cardul de schele)?",["Denumirea schelei","Are num??rul certificatului muncitorului de schele."," Pute??i citi datele inspec??iei ??i sistemul de schele din acesta.","Indic?? dac?? schela este sigur?? de utilizat"], "Indic?? dac?? schela este sigur?? de utilizat"
    ),
    new Question(
        "Care afirma??ie este corect???",["O analiz?? a riscului ??n ultimul moment ar trebui efectuat?? la sf??r??itul sarcinii."," O analiz?? de risc ??n ultimul moment nu este necesar?? dac?? este disponibil?? o analiz?? de risc bazat?? pe sarcini.","Analiza riscurilor de ultim moment este controlul siguran??ei la locul de munc??.","O analiz?? de risc ??n ultimul moment trebuie efectuata de inginer."], "Analiza riscurilor de ultim moment este controlul siguran??ei la locul de munc??."
    ),
    new Question(
        "Responsabilitatea principal?? pentru siguran??a la locul de munc?? revine:",["Paznicul","Inspec??ia muncii","Angajatului uzinei"," Angajatorul"], " Angajatorul"
    ),
    new Question(
        "Ce determin?? nivelul de risc ??n timpul muncii?",["De acasa."," De la supravegherea exercitat?? de client.","Din planul de s??n??tate ??i siguran???? (plan V & G)."," De la locul de munc??."], " De la locul de munc??."
    ),
    new Question(
        "Care sunt diferitele faze in controlul ??i rezolvarea accidentelor?",["reportarea unui incident, ridicarea barierelor, implementarea activit????ilor, ??ncheierea incidentului."," la ??nceputul Raport??rii incidentului, informarea pompierilor, terminarea pompierilor, terminarea pompierilor,","La ??nceput: reportarea unui incident, clasificarea incidentului, implementarea ac??iunilor.","Raportarea unui incident."], "La ??nceput: reportarea unui incident, clasificarea incidentului, implementarea ac??iunilor."
    ),
    new Question(
        "Dragos lucreaza ??n incinta fabricii. Dragos lucreaz?? singur ??i locul de munc?? este zgomotos. Crede c?? aude o alarm?? de scurgere a gazului. Dar Dragos nu este sigur. Ce ar trebui s?? fac????",["Sa continuie munca.","Merge??i direct la punctul de ??nt??lnire.","Apela??i serviciul ??i ??ntreba??i dac?? alarma a fost declan??at??.","Suna??i-l pe ??ef ??i ??ntreba??i-l dac?? poate continua s?? lucreze."], "Merge??i direct la punctul de ??nt??lnire."
    ),
    new Question(
        "Care este riscul de benzen?",["Toxic.","Benzenul este o substan???? d??un??toare.","Benzenul este un plastic","Benzenul este un cancerigen."], "Benzenul este un cancerigen."
    ),
    new Question(
        "Ce ar trebui s?? fac c??nd folosesc lan??ul?",["Nici un raspuns, nu este corect.","S?? unge??i lan??ul ??nainte de utilizare.","Str??nge??i ??n siguran???? ??uruburile bornei.","Lucr??rile trebuie efectuate de c??tre doi oameni."], "Str??nge??i ??n siguran???? ??uruburile bornei."
    ),
    new Question(
        "C??nd este imposibil s?? lucrezi la ??n??l??ime?",["C??nd for??a v??ntului dep????e??te 4 grade.","c??nd for??a v??ntului dep????e??te 5 grade.","Cand for??a v??ntului dep????e??te 3 grade.","C??nd for??a v??ntului dep????e??te 6 grade."], "C??nd for??a v??ntului dep????e??te 6 grade."
    ),
    new Question(
        "Care din urmatoarele este corecta:LMRA Analiza riscului in ultimul minut?",["LMRA trebuie facuta la incheierea activitatii.","Toate variantele sunt gresite.","LMRA nu este necesara daca exista inventar de evaluare a riscurilor la locul de munca"," LMRA consta in controlarea securitatii la locul de munca."], "LMRA consta in controlarea securitatii la locul de munca."
    ),
    new Question(
        "Ce este important atunci c??nd ridica??i manual un obiect aflat pe jos?",["S?? pute??i ??ntoarce lateral obiectul dup?? ridicare. ","S?? ridica??i obiectul cu spatele drept ??i genunchii ??ndoi??i.","Sa indepartati cat mau mult picioarele.","Sa ridicati cu bratele drepte."], "S?? ridica??i obiectul cu spatele drept ??i genunchii ??ndoi??i."
    ),
    new Question(
        "C??nd trebuie s?? purta??i ochelarii de protec??ie?",["La polizare, t??iere ??i g??urire.","Nici o varianta nu este corecta.","La sudurile autogene","La cuplarea ??i decuplarea furtunurilor produsului. "], "La polizare, t??iere ??i g??urire."
    ),
    new Question(
        "Cum trebuie plasat?? o butelie de acetilen?? ??n timpul sud??rii?",["Butelia trebuie s?? stea ??ntr-un unghi de cel pu??in 30?? fa???? de podea. ","Butelia trebuie s?? stea numai ??n pozi??ie laterala.","Butelia trebuie s?? stea numai ??n pozi??ie vertical??.","Butelia poate fi a??ezat?? orizontal pe podea. "], "Butelia trebuie s?? stea ??ntr-un unghi de cel pu??in 30?? fa???? de podea. "
    ),
    new Question(
        "Care este unul dintre riscurile utiliz??rii unui motostivuitor?",["Stricarea aparatului","Afectarea auzului celor din jur. "," Accidentarea persoanelor. ","Murd??rirea sarcinii. "], " Accidentarea persoanelor. "
    ),
    new Question(
        "Care este unghiul maxim al celor dou?? lan??uri suspendate de care este ata??at?? sarcina?",["45??","90??","150??","120??"], "120??"
    ),
    new Question(
        "La ce ??n??l??ime ar trebui s?? se utilizeze dispozitive anti-c??dere?",["De la 1 metru.","De la 2 metri.","De la 3 metri.","Peste 2,5 metri."], "De la 2 metri."
    ),
    new Question(
        "Temperatura de autoaprindere este ???",["cea mai sc??zut?? temperatur?? la care lichidul se poate aprinde din lumin??","cea mai mica temperatur?? la care substan??a aprinde","cea mai mare temperatur?? la care substan??a aprinde","cea mai sc??zut?? temperatur?? la care o substan???? se auto-aprinde f??r?? o surs?? de aprindere extern??"], "cea mai sc??zut?? temperatur?? la care o substan???? se auto-aprinde f??r?? o surs?? de aprindere extern??"
    ),
    new Question(
        "Ave??i o etichet?? veche a substan??ei periculoase. Unde sunt informa??iile despre m??surile de securitate?",["Pe baza descrierii de sub litera M.","Pe baza descrierii de sub litera R.","Pe baza descrierii de sub litera P.","Pe baza descrierii de sub litera S."], "Pe baza descrierii de sub litera S."
    ),
    new Question(
        "Ce este analiza riscului de activitate (TRA)?",[" Analiza scris?? a riscurilor care pot ap??rea ??n timpul lucrului cu cel mai mic grad de risc.","O list?? scris?? a lucr??rilor care pot duce la amenin????ri ??n ??ntreprindere."," Analiza scris?? a riscurilor care pot ap??rea ??n timpul lucrului cu cel mai ??nalt grad de risc.","Evaluarea scris?? a sarcinilor enumerate ??n documentul de recunoa??tere ??i evaluare a pericolelor."], " Analiza scris?? a riscurilor care pot ap??rea ??n timpul lucrului cu cel mai ??nalt grad de risc."
    ),
    new Question(
        "C??nd, conform prevederilor Legii privind condi??iile de munc??, ar trebui s?? ??ncetez munca?",["Daca colegu iti spune"," ??n caz de condi??ii meteorologice nefavorabile","??n caz de pericol","Dac?? lucrarea dureaz?? mai mult de 3 ore"], "??n caz de pericol"
    ),
    new Question(
        "Sting??torul cu spum?? func??ioneaz?? pe principiul :",["r??cind sursa de incendiu.","Congelare."," r??cind ??i deplas??nd catalizatorul de oxigen."," ??ntreruperea aliment??rii cu oxigen."], " ??ntreruperea aliment??rii cu oxigen."
    ),
    new Question(
        "Selecta??i o tr??s??tur?? care este caracteristic?? unui spa??iu ??nchis",["Exista doar o intrare.","Exist?? pu??in oxigen ??n camer??","Nu exist?? nici o ventila??ie natural??.","Are o singur?? intrare ??i o ie??ire."], "Nu exist?? nici o ventila??ie natural??."
    ),
    new Question(
        "Pentru a lucra ??n condi??ii de siguran???? ??n spa??ii ??nchise, trebuie s??:",["Efectua??i lucr??ri de cel pu??in dou?? persoane.","Puteti lucra si singur.","Testa??i semnalele de alarm??."," Angaja??i 2 gardieni."], "Efectua??i lucr??ri de cel pu??in dou?? persoane."
    ),
    new Question(
        "Ce poate fi cauzat de zgomotul excesiv?",["Dureri de cap.","Inflama??ia urechii medii.","Cefalee cronic??."," Hipoacuzie permanent??."], " Hipoacuzie permanent??."
    ),
    new Question(
        "Cum se produce electricitatea static???",["Toate variantele.","Prin curgerea curentului electric prin electrodul de p??m??nt.","Prin atingerea p??r??ilor sub tensiune.","Prin frecare ??ntre aer, substan??e (lichide), materiale ??i obiecte."], "Prin frecare ??ntre aer, substan??e (lichide), materiale ??i obiecte."
    ),
    new Question(
        "Valoarea curentului de ??oc electric depinde de:",["rezistenta"," intensitatea, tensiunea, rezisten??a temperaturii.","durata atingerii"," substratului"], " intensitatea, tensiunea, rezisten??a temperaturii."
    ),
    new Question(
        "Toate ma??inile electrice trebuie verificate de un specialist:",["o dat?? pe an.","Dup?? fiecare repara??ie.","La 2 ani.","La fiecare 5 ani."], "o dat?? pe an."
    ),
    new Question(
        "Cum este securizat?? o gaur?? minim periculoas?? ??n perete sau o ??an?? ad??nc?",["Pune un gard.","Pune??i o Band?? de plastic.","Toate Variantele","Posta??i un semn de avertizare."], "Pune un gard."
    ),
    new Question(
        "Pute??i citi capacitatea maxim?? de ??nc??rcare a centurii din:",["Manual","Inc??rc??tura fiind ridicat??.","Ambalaj","Pe banda de autocolant."], "Pe banda de autocolant."
    ),
    new Question(
        "Cum stingem un incendiu de echipamente electrice?",["Toate variantele de mai jos.","cu Ap??"," CO2 sau pulbere.","O p??tur??"], " CO2 sau pulbere."
    ),
    new Question(
        "Func??ionarea sting??torului cu CO2 se bazeaz?? pe :",[" ??nlocuirea oxigenului.","Congelare","Inghetare","Ac??ion??nd ca un catalizator negativ"], " ??nlocuirea oxigenului."
    ),
    new Question(
        "Punctul de aprindere este ???",[" cea mai sc??zut?? temperatur?? la care un lichid poate lua foc de la lumina.","cea mai sc??zut?? temperatur?? la care se formeaz?? vapori inflamabili, care poate s?? fie aprins de o sc??nteie.","cea mai ridicat?? temperatur?? la care un lichid se poate aprinde de la o sc??nteie.","cea mai mica temperatur?? la care un lichid se poate aprinde de la o sc??nteie."], "cea mai sc??zut?? temperatur?? la care se formeaz?? vapori inflamabili, care poate s?? fie aprins de o sc??nteie."
    ),
    new Question(
        "Scopul raportului de amenin??are ??i al evalu??rii riscurilor este?",["Angajatorul trebui sa se ocupe.","Ascunderea amenin????rilor existente","Eliminarea tuturor amenin????rilor","Controlul riscurilor"], "Controlul riscurilor"
    ),
    new Question(
        "Ce impune angajatorul, Legea privind condi??iile de munc???",[" Furniza??i echipamente de protec??ie personal?? angaja??ilor","Masina personala.","Aborda??i doar pericolele care ar putea duce la un accident"," Asigura??i o mas?? cald?? la locul de munc??"], " Furniza??i echipamente de protec??ie personal?? angaja??ilor"
    ),
    new Question(
        "Trebuie s?? lucrezi ??ntr-o camer?? ??nchis??. M??sur??torile arat?? c?? concentra??ia de oxigen este de 18%. Ce trebuie s?? faci pentru a ??ncepe s?? lucrezi?",["Ventila??i camera ??n mod mecanic ??i m??sura??i din nou concentra??ia de oxigen.","Folosi??i o masc?? de filtrare","Nimic, concentra??ia de oxigen este suficient de mare.","Folositi un prosop"], "Ventila??i camera ??n mod mecanic ??i m??sura??i din nou concentra??ia de oxigen.a"
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
