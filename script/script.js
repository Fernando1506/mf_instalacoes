//Todas as vezes que houver scroll no site, Ã© disparada a funcao chamada function(). 
window.onscroll = function () {

    console.log('!');

    //A variavel top armazena a distancia para o topo da pagina. 
    var top = window.pageYOffset || document.documentElement.scrollTop

    //Quando a distancia do topo for maior que 11 (ou seja, quando o site tiver sido rolado pra baixo) ,
    // sao realizadas algumas aÃ§oes para alterar a aparencia do menu. 
    if (top > 11) {

        $('#menuSuperior').hide();

        //Comando para adicionar uma nova classe ao menu. Aqui nesse caso estou add a classe chamada classe2. Obs: .Menu se refere ao id da div do menu. 
        $('#menu').addClass('navbar2');
        $('#imagem').addClass('logo2');
        $('#navmenu').addClass('menu2');

        // Comando para remover uma classe do menu.
        $('#menu').removeClass('navbar');

        // *** OBS: Essa parte de alterar a aparencia do menu pode ser feita de varias formas, aqui eu alterei a classe do menu, mas voce
        // pode ter dois menus diferentes e mostrar apenas um deles dependendo da situacao, depois pessoalmente te passo mais dicas de 
        // como alterar a aparencia do menu 

    }

    //Nesse if Ã© detectado quando o site voltou para o topo, e o menu deve ser alterado novamente 
    if (top < 5) {


        $('#imagem').removeClass('logo2'); 
        $('#imagem').addClass('logo');

        $('#navmenu').removeClass('menu2')
        $('#navmenu').addClass('menu')

        $('#menuSuperior').show();

        //Comando para adicionar uma nova classe ao menu. Aqui nesse caso estou add a classe chamada classe2. Obs: .Menu se refere ao id da div do menu. 
        $('#menu').addClass('navbar');

        // Comando para remover uma classe do menu.
        $('#menu').removeClass('navbar2');
    }
}