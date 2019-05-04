const biodata = {
    name : 'Erza Taufik',
    address : 'Jl Griya Nirmala Blok O-2 No.5 Way Halim Permai, Bandar Lampung, Lampung',
    hobbies : ['Gaming', 'Programming', 'Coffee and Chill'],
    is_Married : false,
    school : [
        { id : 'highSchool' ,
        schoolName : 'SMA N 9 Bandar Lampung'
        }
    ] ,
    skills : [
        {
        id: 1,
        skill : 'Javascript'
        },
        {
        id :2,
        skill : 'HTML'
        },
        {
        id :3,
        skill : 'CSS'
        }
    ]
}

function getData(data){
    return JSON.stringify(biodata);
};

// biodata in json format
getData();