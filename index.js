const MODEL_DATA_ADRESSLIST = {
    "0": {
        "adress": 'Адресс - 1',
        "coords": "36.56667777, 34.6556777"
    },
    "1": {
        adress: 'Адресс - 1',
        coords: "36.56667777, 34.6556777"
    },
    "2": {
        adress: 'Адресс - 1',
        coords: "36.56667777, 34.6556777"
    },
    "3": {
        adress: 'Адресс - 1',
        coords: "36.56667777, 34.6556777"
    },
    "4": {
        adress: 'Адресс - 1',
        coords: "36.56667777, 34.6556777"
    },
    "5": {
        adress: 'Адресс - 1',
        coords: "36.56667777, 34.6556777"
    },
};

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
                                        <div class="mf-fs__description">Ваши шины на сезонном хранении в компании Шиный Сервис?</div>
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
                                            <ul class="adress-list" id="adress-list">
                                            
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
                                    <fieldset class="mf-mf__fs" id="mf-mf__fs-8" hidden>
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
                                        </div>f
                                    </fieldset>
                                     <fieldset class="mf-mf__fs" id="mf-mf__fs-9" hidden>
                                        <div class="mf-fs__description">Ваши шины на сезонном хранении в компании КОЛЕСО?</div>
                                        <div class="mf-fs__controls">
                                            <input type="radio" name="in-storage" id="in-storage--yes" />
                                            <label for="client-type--person">Да</label>
                                            <input type="radio" name="in-storage" id="in-storage--no" />
                                            <label for="client-type--company">нет</label>
                                        </div>
                                    </fieldset>
                                    <div class="mf-mf__buttons">
                                        <button name="control-btn" id="btn-back">Назад</button>
                                        <button name="control-btn" id="btn-forward">Далее</button>
                                        <button name="control-btn" type="submit" id="btn-submit">Отправить</button>
                                    </div>
                                </form>`;
        this._controlBtns = {};
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
            this.setControlBtns();
            this.setEventListners();
            this._maxStateNumber = document.getElementsByName('control-btn').length;
            this.currentStateNumber = 1;
            this.changeControlBtnsStatus();
            this.controller.setAdressList();
        });
    }

    setControlBtns() {
        this._controlBtns.back = document.getElementById('btn-back');
        this._controlBtns.forward = document.getElementById('btn-forward');
        this._controlBtns.submit = document.getElementById('btn-submit');
    }

    setEventListners() {
        this._controlBtns.back.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.changeState('back');
        });
        this._controlBtns.forward.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.changeState('forward');
        });
        this._controlBtns.submit.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._controller.submitForm();
        });
    }

    changeState(changeStatus) {
        switch (changeStatus) {
            case 'back':
                console.log('back');
                if (this.currentStateNumber > 1) {
                    document.getElementById(`mf-mf__fs-${this.currentStateNumber}`).hidden = true;
                    document.getElementById(`mf-mf__fs-${this.currentStateNumber - 1}`).hidden = false;
                    this.currentStateNumber = this.currentStateNumber - 1;
                    this.changeControlBtnsStatus();
                }
                break;
            case 'forward':
                console.log('forward');
                if (this.currentStateNumber < this._maxStateNumber) {
                    document.getElementById(`mf-mf__fs-${this.currentStateNumber}`).hidden = true;
                    document.getElementById(`mf-mf__fs-${this.currentStateNumber + 1}`).hidden = false;
                    this.currentStateNumber = this.currentStateNumber + 1;
                    this.changeControlBtnsStatus();
                }
                break;
            default:
                if (changeStatus >= 0 || changeStatus <= this._maxStateNumber) {
                    document.getElementById(`mf-mf__fs-${this.currentStateNumber}`).hidden = true;
                    document.getElementById(`mf-mf__fs-${changeStatus}`).hidden = false;
                    this.currentStateNumber = changeStatus;
                    this.changeControlBtnsStatus();
                }
                break;
        }
    }

    changeControlBtnsStatus() {
        switch (this.currentStateNumber) {
            case 1:
                this._controlBtns.back.hidden = true;
                this._controlBtns.forward.hidden = false;
                this._controlBtns.submit.hidden = true;
                break;
            case this._maxStateNumber:
                this._controlBtns.back.hidden = false;
                this._controlBtns.forward.hidden = true;
                this._controlBtns.submit.hidden = false;
                break;
            default:
                this._controlBtns.back.hidden = false;
                this._controlBtns.forward.hidden = false;
                this._controlBtns.submit.hidden = true;
                break;
        }
    }
    get adressListElement() {
        return document.getElementById('adress-list');
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

    submitForm() {
        console.log('submit by controller');

    }

    setAdressList() {
        let adresses = this.model.getAdressList();
        let listHTML = '';
        let counter = 0;
        for (const key in adresses) {
            if (adresses.hasOwnProperty(key)) {
                const adress = adresses[key];
                counter++;
                listHtml += `<li class="adress-list__item">
                                <input type="radio" name="adress" id="adress-${counter}" />
                                <label for="adress-${counter}">${adress[key].adress}</label>
                            </li>`
            }
        }
        this.view.adressListElement.insertAdjacentHTML('afterbegin', listHtml);
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

    getAdressList() {
        //здесь получаем список адресов
        return MODEL_DATA_ADRESSLIST;
    }
}

const view = new Mf_View();
const model = new Mf_Model();
const controller = new Mf_Controller(view, model);

view.init('test');