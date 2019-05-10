//sidebar
        $(function(){
            $(".navigation_icon").click(function(){
                $(".navigation").toggleClass('navigation-open');
            });
        });

        //sub-images inside sliding panel
        // showJumbo();
        // function showJumbo(){
        //   $(".image_6").fadeIn(2000);
        //  }

          // $(function(){
            setTimeout(function(){
              $(".image_6").fadeIn(2000);
            },3000);
          // });

         /*let xhr = new XMLHttpRequest;
         xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let result = (this.responseText);
                console.log(result.messages);
            }
         }
         xhr.open('GET', 'txt.json', true);
         xhr.send();*/

//scroll assistants
         (function() { 
           var documentElem = $(document),
               position = $('.position'),
                   lastScrollTop = 0;
           documentElem.on('scroll', function(){
               var currentScrollTop = $(this).scrollTop();
               
               //scroll down
               if(currentScrollTop > lastScrollTop){
                   position.addClass('hidden');
               }else{
                   position.removeClass('hidden');
               }
               lastScrollTop = currentScrollTop;
           });
       })();
       
       (function() {
           var documentElement = $(document),
               position1 = $('.position1'),
                   lastScrollTop = 0;
           documentElement.on('scroll', function(){
               var qurrentScrollTop = $(this).scrollTop();
               
               //scroll down
               if(qurrentScrollTop > lastScrollTop){
                   position1.removeClass('hidden');
               }else{
                   position1.addClass('hidden');
               }
               lastScrollTop = qurrentScrollTop;
           });
       })();