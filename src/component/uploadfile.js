export default function uploadFile(files, user) {

    var formData = new FormData();

    files.map((file, index) => {
        formData.append(`file${index}`, file);
        formData.append(`fileName-${index}`, file.name);
    });

    formData.append('user', user);

    fetch('https://path/to/api', {
        headers: {
            'content-type': 'multipart/form-data',
        },
        method: 'POST',
        body: formData,
    }).then(response => response.json()).then(success => {
            // Do something with the successful response
    }).catch(error => console.log(error));
}