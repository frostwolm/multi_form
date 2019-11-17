class Mf_View {
    constructor() {
        this._htmlFormLayout = `<form action="" method="post">
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-1">
                                        <div class="mf-fs__description">Укажите Ваш статус клиента</div>
                                        <div class="mf-fs__controls">
                                            <input type="radio" name="client-type" id="client-type--person" />
                                            <label for="client-type--person">Частное лицо</label>
                                            <input type="radio" name="client-type" id="client-type--company" />
                                            <label for="client-type--company">Корпоративный клиент</label>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-2" hidden>
                                        <div class="mf-fs__description">Ваши шины на сезонном хранении в компании КОЛЕСО?</div>
                                        <div class="mf-fs__controls">
                                            <input type="radio" name="in-storage" id="in-storage--yes" />
                                            <label for="client-type--person">Да</label>
                                            <input type="radio" name="in-storage" id="in-storage--no" />
                                            <label for="client-type--company">нет</label>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-3" hidden>
                                        <div class="mf-fs__description"> Укажите госномер вашей машины или номер партии хранения шин</div>
                                        <div class="mf-fs__controls">
                                            <label for="license-number">Госномер авто:</label>
                                            <input type="text" name="car-license-number" placeholder="м976мм" />
                                            <label for="license-number">Номер партии хранения:</label>
                                            <input type="text" name="party-number" placeholder="123456" />
                                            <div class="controls__description">
                                                Если вы не помните номер партии хранения ваших шин, введите госномер
                                                авто. Мы используем эту информацию чтобы найти номер партии (обычно
                                                клиентам намного проще вспомнить госномер их авто нежели номер
                                                партии хранения).
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-4" hidden>
                                        <div class="mf-fs__description">Выберите адрес сервисного центра в котором хотите пройти обслуживание</div>
                                        <div class="mf-fs__controls">
                                            <div class="fs__map-container">
                                                Тут будет карта
                                            </div>
                                            <ul class="adress-list">
                                                <li class="adress-list__item">
                                                    <input type="radio" name="adress" id="adress-1" /><label for="adress-1">Адрес-1</label>
                                                </li>
                                                <li class="adress-list__item">
                                                    <input type="radio" name="adress" id="adress-2" /><label for="adress-2">Адрес-2</label>
                                                </li>
                                                <li class="adress-list__item">
                                                    <input type="radio" name="adress" id="adress-3" /><label for="adress-3">Адрес-3</label>
                                                </li>
                                                <li class="adress-list__item">
                                                    <input type="radio" name="adress" id="adress-4" /><label for="adress-4">Адрес-4</label>
                                                </li>
                                                <li class="adress-list__item">
                                                    <input type="radio" name="adress" id="adress-5" /><label for="adress-5">Адрес-5</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-5" hidden>
                                        <div class="mf-fs__description">Выберите дату и время</div>
                                        <div class="mf-fs__controls">
                                            <div class="calendar">
                                                <input type="datetime-local" name="date-time" id="date-time">
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-6" hidden>
                                        <div class="mf-fs__description">Заполните форму</div>
                                        <div class="mf-fs__controls">
                                            <div class="fs__input-container">
                                                <label for="client-name">ФИО:</label><input type="text" name="client-name" id="client-name"
                                                    placeholder="Иванов Иван Иванович">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="client-tel">Контактный телефон:</label><input type="tel" name="client-tel"
                                                    id="client-tel" placeholder="+79992342255">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="client-email">Контактный email:</label><input type="email" name="client-email"
                                                    id="client-email" placeholder="ivanov@mail.ru">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="car-brand">Марка автомобиля</label><input type="text" name="car-brand" id="car-brand">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="car-model">Модель автомобиля</label><input type="text" name="car-model" id="car-model">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="car-license-number">Госномер</label><input type="text" name="car-license-number"
                                                    id="car-license-number">
                                            </div>
                                            <div class="fs__input-container">
                                                <label for="">Номер партии хранения</label><input type="text" name="party-number-final"
                                                    id="party-number-final">
                                            </div>
                                        </div>
                                        <div class="mf-fs__controls">
                                            <div class="fs__input-container">
                                                <input type="checkbox" name="rule-consent" id="rule-consent"><label for="rule-consent">С правилами
                                                    предварительной записи на услугу Легковой шиномонтаж ознакомлен, согласен</label>
                                            </div>
                                            <div class="fs__input-container">
                                                <input type="checkbox" name="personal-data-consent" id="personal-data-consent"><label
                                                    for="personal-data-consent">Я согласен на <a href="http://">обработку персональных
                                                        данных</a>.</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-7" hidden>
                                        <div class="mf-fs__description">Укажите госномер Вашей машины</div>
                                        <div class="mf-fs__controls">
                                            <label for="license-number">Госномер авто:</label>
                                            <input type="text" name="car-license-number" placeholder="м976мм" />
                                            <div class="controls__description">
                                                Для того чтобы Вы могли продолжить запись как корпоративный клиент, Вы должны указать госномер
                                                автомобиля, который на данный момент уже должен быть занесён в нашу систему обработки данных
                                                корпоративных клиентов.
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="mf-mf__buttons">
                                        <button id="btn-back">Назад</button>
                                        <button id="btn-forward">Далее</button>
                                        <button type="submit" id="btn-submit">Отправить</button>
                                    </div>
                                </form>`;
    }

    get htmlFormLayout() {
        return this._htmlFormLayout;
    }

    get formElement() {
        return this._formElement;
    }

    set controller(controllerObj) {
        this._controller = controllerObj;
    }

    get controller() {
        return this._controller;
    }

    init(containerID) {
        document.addEventListener("DOMContentLoaded", (evt) => {
            const containerElement = document.getElementById(containerID);
            containerElement.insertAdjacentHTML('afterBegin', this.htmlFormLayout);
            this._formElement = containerElement.firstChild;
        });
    }
}

class Mf_Controller {
    constructor(viewObj, modelObj) {
        this._view = viewObj;
        this._view.controller = this;
        this._model = modelObj;
        this._model.controller = this;
    }

    get view() {
        return this._view;
    }

    get model() {
        return this._model;
    }
}

class Mf_Model {
    constructor() {

    }

    set controller(controllerObj) {
        this._controller = controllerObj;
    }

    get controller() {
        return this._controller;
    }
}

const view = new Mf_View();
const model = new Mf_Model();
const controller = new Mf_Controller(view, model);

view.init('test');