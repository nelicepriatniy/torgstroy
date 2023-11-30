
<?php 
/*
* Template name: заглушка
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Торгстрой</title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
<div class="zaglushka__container">
    <div class="zaglushka__wraper">
        <img src="./media/icons/logo.png" alt="" class="zaglushka__logo">
        <p class="zaglushka__heading">Сайт на ремонте</p>
        <p class="zaglushka__text">Очень скоро вернемся</p>
        <div class="zaglushkahreffBlock">
            <a href="tel:+74951457517" class="zaglushkaHreff">
                <img src="./media/zaglushka/tel.svg" alt="" class="zaglushkaHreff__img">
                <p class="zaglushkahreff__text">+7 (495) 145-75-17</p>
            </a>
            <a href="mailto:tsi@tsind.ru" class="zaglushkaHreff">
                <img src="./media/zaglushka/mail.svg" alt="" class="zaglushkaHreff__img">
                <p class="zaglushkahreff__text">tsi@tsind.ru</p>
            </a>
        </div>
    </div>
        <img src="./media/zaglushka/elips1.svg" alt="" class="elips1">
        <img src="./media/zaglushka/elips2.svg" alt="" class="elips2">
    </div>
</body>
</html>


				
<?php if( have_rows('dobavit_punkt_v_heder', 3342) ): while ( have_rows('dobavit_punkt_v_heder', 3342) ) : the_row();?>
						<li class="header-menu__list__item mob">
							<div class="header-menu-item">
								<a href="<?php the_sub_field('ssylka_punkta', 3342); ?>" class="header-menu-hreff h4"><?php the_sub_field('tekst_punkta', 3342); ?></a>
							</div>
						</li>

					<?php endwhile;endif;?>
                    