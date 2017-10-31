//             ==================================
//                   Main nav
//            ===================================
            $(function () {
                $('.burger').click(function () {
                    
                    $('.nav-bar').slideToggle(1000);
                });
            });

            
            //             ==================================
//                   Dropdown
//            ===================================
            $(function () {
                $('.dropdown').click(function () {
                    
                    $('.nav-secondLevel').slideToggle(1000);
                });
            });
//             ==================================
//                   Lang - Flags
//            ===================================
            $(function () {
                $('.lang').click(function () {
                    $('.flags').fadeToggle(1000);
                });
            });
            
            
          
//            =====================================
//                Bugs
//==================================
            
            //One
        $(function () {
                $('.one').click(function () {
                $(this).css({'transform': 'translateY(-2000px'}); 
                });
        });
           
            //Two
         $(function () {
                $('.two').click(function () {
                $(this).css({'transform': 'translateX(-2000px'}); 
                });
        });
            
            //Three
            $(function () {
                $('.three').click(function () {
                $(this).css({'transform': 'translateX(2000px'}); 
                });
        });
            
            //Four
        $(function () {
                $('.four').click(function () {
                $(this).css({'transform': 'translateY(2000px'}); 
                });
        });
        