class mainInitialize {
    constructor(token, BaseURL) {
        this.tokenCopyright = token;
        this.BaseURLCopyright = BaseURL;
    }
}


class Entity {
    constructor(patient_url, type, title) {
        this.patient_url = patient_url;
        this.type = type;
        this.title = title;
        this.sub_type = '';
        this.avatar = '';
        this.copyright_url = '';
        this.copyright_description = '';
        this.date = '';
    }
}

let admin;
let entity;

export const initialize = ({token, BaseURL}) => {
    admin = new mainInitialize(token, BaseURL);
    entity = null;
}

export const createEntity = ({patient_url, type, title = "No name",
                                 copyright_description = "",
                                 comment = "",
                                 avatar = "",
                                 date = '',
                                 transcript = ''
                                 }) => {
    if (!admin.tokenCopyright || !admin.BaseURLCopyright) {
        console.error('Call function initialize');
        return;
    }
    entity = new Entity(patient_url, type, title);
    entity = {
        sub_type: comment,
        avatar: avatar,
        copyright_url: transcript,
        copyright_description: copyright_description,
        date: date
    }

}



