$(document).ready(function () {
    
    // alterar icone quando passa o mouse no botão
    $('.mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('.mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    
    // colocar sombra no nav bar
    $(window).on('scroll', function () {
        // pega o header na pagina
        const header = $('header');
        // ve se a posição inicial da pagina esta no inicio
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;
        
        // fazer um if se a boxshadow estiver no inicio ela sumir
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
            } else {
                header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)');
        }

        // colocar o traço no menu de acordo com a area da pagina
        sections.each(function (i) {
            const section = $(this);
            // topo da pagina
            const sectionTop = section.offset().top - 96;
            // fim da pagina
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // atualiza o index da posição 0 variavel acima
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');

        // animação dos elementos:


    });
    
    // Animações na pagina coloca o script da api na pagina
    // <script src="https://unpkg.com/scrollreveal"></script>
    
    // meche com a seção da ID CTA da pagina
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    // meche com a seção da classe dish da pagina
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    // meche com a seção da id testimonial_chef da pagina
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });
    // meche com a seção da classe feedback da pagina
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });



});