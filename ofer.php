
<?php 
/*
* Template name: вакансии
*/
get_header();
?>


<main>
    <section class="oferCards">
        <div class="container">
            <p class="oferCards__heading">вакансии</p>
            <div class="oferCards__wraper">
                <div class="oferCards-item">
                    <img src="./media/ofers/bg.png" alt="" class="oferCards-item__bg">
                    <div class="oferCard-item__gradient"></div>
                    <div class="oferCard-item__wak">
                        <p class="oferCard-item__wak__text">Вакансии</p>
                    </div>
                    <div class="oferCard-item__info">
                        <p class="oferCard-item__info__location">Челябинск</p>
                        <p class="ofer-item__info__vocans">ЭЛЕКТРОМОНТАЖНИК</p>
                        <a href="" class="oferCard-item__info__wraper">
                            <p class="oferCard-item__info__wraper__text">Подробнее</p>
                            <img src="./media/icons/ofersArrow.svg" alt="" class="oferCard-item__info__wraper__img">
                        </a>
                    </div>
                </div>
                <div class="oferCards-item">
                    <img src="./media/ofers/bg.png" alt="" class="oferCards-item__bg">
                    <div class="oferCard-item__gradient"></div>
                    <div class="oferCard-item__wak">
                        <p class="oferCard-item__wak__text">Вакансии</p>
                    </div>
                    <div class="oferCard-item__info">
                        <p class="oferCard-item__info__location">Челябинск</p>
                        <p class="ofer-item__info__vocans">ЭЛЕКТРОМОНТАЖНИК</p>
                        <a href="" class="oferCard-item__info__wraper">
                            <p class="oferCard-item__info__wraper__text">Подробнее</p>
                            <img src="./media/icons/ofersArrow.svg" alt="" class="oferCard-item__info__wraper__img">
                        </a>
                    </div>
                </div>
                <div class="oferCards-item">
                    <img src="./media/ofers/bg.png" alt="" class="oferCards-item__bg">
                    <div class="oferCard-item__gradient"></div>
                    <div class="oferCard-item__wak">
                        <p class="oferCard-item__wak__text">Вакансии</p>
                    </div>
                    <div class="oferCard-item__info">
                        <p class="oferCard-item__info__location">Челябинск</p>
                        <p class="ofer-item__info__vocans">ЭЛЕКТРОМОНТАЖНИК</p>
                        <a href="" class="oferCard-item__info__wraper">
                            <p class="oferCard-item__info__wraper__text">Подробнее</p>
                            <img src="./media/icons/ofersArrow.svg" alt="" class="oferCard-item__info__wraper__img">
                        </a>
                    </div>
                </div>
                <div class="oferCards-item">
                    <img src="./media/ofers/bg.png" alt="" class="oferCards-item__bg">
                    <div class="oferCard-item__gradient"></div>
                    <div class="oferCard-item__wak">
                        <p class="oferCard-item__wak__text">Вакансии</p>
                    </div>
                    <div class="oferCard-item__info">
                        <p class="oferCard-item__info__location">Челябинск</p>
                        <p class="ofer-item__info__vocans">ЭЛЕКТРОМОНТАЖНИК</p>
                        <a href="" class="oferCard-item__info__wraper">
                            <p class="oferCard-item__info__wraper__text">Подробнее</p>
                            <img src="./media/icons/ofersArrow.svg" alt="" class="oferCard-item__info__wraper__img">
                        </a>
                    </div>
                </div>
                <div class="oferCards-item">
                    <img src="./media/ofers/bg.png" alt="" class="oferCards-item__bg">
                    <div class="oferCard-item__gradient"></div>
                    <div class="oferCard-item__wak">
                        <p class="oferCard-item__wak__text">Вакансии</p>
                    </div>
                    <div class="oferCard-item__info">
                        <p class="oferCard-item__info__location">Челябинск</p>
                        <p class="ofer-item__info__vocans">ЭЛЕКТРОМОНТАЖНИК</p>
                        <a href="" class="oferCard-item__info__wraper">
                            <p class="oferCard-item__info__wraper__text">Подробнее</p>
                            <img src="./media/icons/ofersArrow.svg" alt="" class="oferCard-item__info__wraper__img">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="formBlock black">
        <div class="container">
            <div class="formBlock__left">
                <p class="formBlock__left__heading">Отправить резюме</p>
                <p class="formBlock__left__text">Мы тщательно изучим ваш опыт работы и перезвоним</p>
            </div>
            <div class="formBlock__right">
                <div action="" method="POST">
                    <input type="text" placeholder="Имя" class="form_inputs">
                    <input type="text" placeholder="Телефон" class="form_inputs">
                    <div class="fileInp">
                        <input type="file" id="fu" placeholder="Загрузить файл" class="fyleInp">
                        <label for="fu" class="fyleText">ПРЕКРИПИТЬ резюме</label>
                        <label for="fu" class="fyleCisual">Загрузить файл</label>
                    </div>
                    <textarea type="text" placeholder="Комментарий" class="form_texarea"></textarea>
                    <div class="politycInp">
                        <input type="checkbox" id="formPolityc" class="politycCheckbox" checked>
                        <label for="formPolityc" class="politycVisual"><img src="./media/icons/goldYes.svg" alt=""
                                class="politycVisual__img"></label>
                        <label for="formPolityc" class="politycText">Я согласен с политикой
                            конфиденциальности</label>
                    </div>
                    <button class="nonBgButton">Отправить</button>
                </div>
            </div>
        </div>
    </section>
</main>


<?php
get_footer(); ?>