/* 
 */
function Person(uuid, firstname, lastname, image) {
    this.uuid = uuid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.image = image;

    this.toString = function () {
        return this.firstname + ', ' + this.lastname + ', ' + this.image;
    };

    this.getDialogInputs = function () {
        var container = document.createElement('DIV');
        var divImageRow = document.createElement('DIV');
        var divImageCol1 = document.createElement('DIV');
        var divImageCol2 = document.createElement('DIV');
        var divFirstnameRow = document.createElement('DIV');
        var divFirstnameCol1 = document.createElement('DIV');
        var divFirstnameCol2 = document.createElement('DIV');
        var divLastnameRow = document.createElement('DIV');
        var divLastnameCol1 = document.createElement('DIV');
        var divLastnameCol2 = document.createElement('DIV');
        var form = document.createElement('FORM');
        var inputImage = document.createElement('INPUT');
        var inputFirstname = document.createElement('INPUT');
        var inputLastname = document.createElement('INPUT');
        divImageRow.setAttribute('class', 'row');
        divImageCol1.setAttribute('class', 'col-2');
        divImageCol1.innerHTML = 'Image';
        divImageCol2.setAttribute('class', 'col-4 image');
        inputImage.setAttribute('type', 'file');
        inputImage.style.width = '100%';
        form.appendChild(inputImage);
        divImageCol2.appendChild(form);

        divImageRow.appendChild(divImageCol1);
        divImageRow.appendChild(divImageCol2);


        inputImage.innerHTML = this.image;
        inputFirstname.value = (this.make === undefined) ? '' : this.make;
        inputLastname.value = (this.model === undefined) ? '' : this.model;

        divFirstnameRow.setAttribute('class', 'row');
        divFirstnameCol1.setAttribute('class', 'col-2');
        divFirstnameCol2.setAttribute('class', 'col-4 make');
        divFirstnameCol1.innerHTML = 'Firstname:';
        inputFirstname.style.width = '100%';
        divFirstnameCol2.appendChild(inputFirstname);

        divFirstnameRow.appendChild(divFirstnameCol1);
        divFirstnameRow.appendChild(divFirstnameCol2);


        divLastnameRow.setAttribute('class', 'row');
        divLastnameCol1.setAttribute('class', 'col-2');
        divLastnameCol2.setAttribute('class', 'col-4 model');
        divLastnameCol1.innerHTML = 'Lastname';
        inputLastname.style.width = '100%';
        divLastnameCol2.appendChild(inputLastname);

        divLastnameRow.appendChild(divLastnameCol1);
        divLastnameRow.appendChild(divLastnameCol2);



        container.appendChild(divImageRow);
        container.appendChild(divFirstnameRow);
        container.appendChild(divLastnameRow);

        return container;
    };
    this.getView = function () {
        var divRow = document.createElement('DIV');
        var divImage = document.createElement('DIV');
        var divFirstname = document.createElement('DIV');
        var divLastname = document.createElement('DIV');
        var divYear = document.createElement('DIV');
        var divSelect = document.createElement('DIV');
        divRow.setAttribute('id', this.uuid);
        divRow.setAttribute('class', "row");
        divImage.setAttribute('class', "col-2 image");
        divFirstname.setAttribute('class', "col-1 make");
        divLastname.setAttribute('class', "col-1 model");
        divSelect.setAttribute('class', "col-1 checkbox");
        divFirstname.innerHTML = this.make; //"make";
        divLastname.innerHTML = this.model; //"model";
        var img = document.createElement('IMG');
        img.src = '../resources/images/app/' + this.image;
        img.width = 300;
        divImage.appendChild(img);
        divRow.appendChild(divImage);
        divRow.appendChild(divFirstname);
        divRow.appendChild(divLastname);
        var checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');
        // https://www.w3schools.com/icons/google_icons_editor.asp
        //<i class="material-icons" style="font-size:36px">mode_edit</i>
        var editIcon = document.createElement('I');
        editIcon.setAttribute('class', 'material-icons');
        editIcon.setAttribute('onClick', 'edit(\'' + this.uuid + '\' )');
        editIcon.innerHTML = 'mode_edit';
        divSelect.appendChild(checkbox);
        divSelect.appendChild(editIcon);
        divRow.appendChild(divSelect);
        return divRow;

    };

}
