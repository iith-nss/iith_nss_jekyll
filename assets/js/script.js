// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
// if ($('.smart-scroll').length > 0) { // check if element exists
//     var last_scroll_top = 0;
//     $(window).on('scroll', function() {
//         scroll_top = $(this).scrollTop();
//         if(scroll_top < last_scroll_top) {
//             $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
//         }
//         else {
//             $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
//         }
//         last_scroll_top = scroll_top;
//     });
// }

//close navbar or click outside
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

$(function() {
    function after_form_submitted(data) {
        if(data.result == 'success') {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});

// document.addEventListener("DOMContentLoaded", function() {
//   function typeText(elementID) {
//     const textArray = elementID == "typing-text-desktop" ? ["NOT ME, BUT YOU","NSS IIT HYDERABAD"] : ["NOT ME","BUT YOU","NSS IITH"];
//     const typingText = document.getElementById(elementID);
    
//     let arrayIndex = 0;
//     let charIndex = 0;

//     function type() {
//       if (charIndex < textArray[arrayIndex].length) {
//         typingText.textContent += textArray[arrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type,100);
//       } else {
//         setTimeout(erase,2000);
//       }
//     }

//     function erase() {
//       if (charIndex > 0) {
//         typingText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase,100);
//       } else {
//         arrayIndex++;
//         if (arrayIndex >= textArray.length) arrayIndex = 0;
//         setTimeout(type,1000);
//       }
//     }

//     setTimeout(type,1000);
//   }

//   typeText("typing-text-desktop");
//   typeText("typing-text-mobile");
// });

const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const trailCount = 5;
const trails = [];
for (let i=0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trails.push(trail);
}

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  trails.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      trail.style.opacity = 1;
    }, index * 50);
  });
});

document.querySelectorAll('a,button').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});