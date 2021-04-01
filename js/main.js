        $(document).ready(function(){

            /* Валидация формы */
            $('#brif-form').validate({
                rules: {
                        // simple rule, converted to {required:true}
                        username: {
                            required: true,
                            minlength: 2
                        },
                        // compound rule
                        email: {
                            required: true,
                            email: true
                        }
                },
                messages: {
                    username: {
                        required: "Укажите ваше имя",
                        minlength: jQuery.validator.format("Имя должно быть не меньше {0} символов!")
                    },
                    email: "Укажите вашу почту"
                },
                errorClass: "invalid"
            });
            /* Валидация формы */
            $('#offer-form').validate({
                rules: {
                        // simple rule, converted to {required:true}
                        username: {
                            required: true,
                            minlength: 2
                        },
                        // compound rule
                        email: {
                            required: true,
                            email: true
                        }
                },
                messages: {
                    username: {
                        required: "Укажите ваше имя",
                        minlength: jQuery.validator.format("Имя должно быть не меньше {0} символов!")
                    },
                    email: "Укажите вашу почту"
                },
                errorClass: "invalid"
            });

            /* Валидация плагина маска телефона */
            $('#phone').mask('+7 (999) 999-99-99');
            /* Валидация плагина маска телефона */
            $('#phone2').mask('+7 (999) 999-99-99');

            // Обработка и отправка формы через AJAX
            $('#offer-form').on('submit', function(event){
                event.preventDefault();
                $.ajax({
                    url: 'mail.php',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(data){
                        console.log(data);
                        $('.success').text(data + ', Ваша форма отправлена.');
                    }
                });
            });

        }); //закрытие
