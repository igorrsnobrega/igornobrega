$(document).ready(function(){
    translate("pt-br");
});

$('#versao_br').click(function(){
    translate("pt-br");
});
$('#version_en').click(function(){
    translate("en");
});

function translate(language){
    switch (language){
        case "pt-br":
            document.getElementById("title_function").innerHTML = 'Analista/Desenvolvedor de Software';
            document.getElementById("text1").innerHTML = 'Apaixonado por tecnologia desde muito cedo. Lembro do meu primeiro contato com um fabuloso Pentium 3 800Mhz com incríveis 128mb de RAM e o revolucionário Windows 98, a partir desse momento descobri a paixão por Tecnologia.';
            document.getElementById("text2").innerHTML = 'Hoje, graduado em <b>Análise e Desenvolvimento de Software</b> pela <a href="https://www.uninter.com/">UNINTER EDUCACIONAL S/A</a>, atuo como Analista de Software na KMM Engenharia de Sistemas.';
            document.getElementById("text3").innerHTML = 'Dentre minhas principais <i>skills</i> estão <b>JAVA</b>, <b>ORACLE</b>, <b>PHP</b>, <b>ANGULAR</b>, tambem já atuei em projetos com <b>REACT-NATIVE</b>.'; 
            break;
        case "en":
            document.getElementById("title_function").innerHTML = 'Software Analyst/Developer';
            document.getElementById("text1").innerHTML = 'Passionate about technology from a very early age. I remember my first contact with a fabulous Pentium 3 800Mhz with incredible 128mb of RAM and the revolutionary Windows 98, from that moment on I discovered a passion for Technology.';
            document.getElementById("text2").innerHTML = 'Today, graduated in <b>Software Analysis and Development</b> from <a href="https://www.uninter.com/">UNINTER EDUCACIONAL S/A</a>, i work as a Software Analyst at KMM Engenharia de Sistemas.';
            document.getElementById("text3").innerHTML = 'Among my main <i>skills</i> are <b>JAVA</b>, <b>ORACLE</b>, <b>PHP</b>, <b>ANGULAR</b>, i have also worked on projects with <b>REACT-NATIVE</b>.';
            break;
    } 
}