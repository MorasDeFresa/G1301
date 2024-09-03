function makeEditable(id) {
    const element = document.getElementById(id);
    element.onclick = function() {
        const text = this.innerHTML;
        const input = document.createElement('textarea');
        input.value = text;
        input.style.width = '100%';
        input.style.height = '100px';
        this.parentNode.replaceChild(input, this);
        input.focus();
        input.onblur = function() {
            const p = document.createElement('p');
            p.innerHTML = this.value;
            p.id = id;
            this.parentNode.replaceChild(p, this);
            makeEditable(id);
        };
    };
}

makeEditable('personalInfo');
makeEditable('professionalObjective');
makeEditable('workExperience');
makeEditable('education');

const photoInput = document.getElementById('photoInput');
const photo = document.getElementById('photo');

photo.onclick = function() {
    photoInput.click();
};

photoInput.onchange = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        photo.src = e.target.result;
    };
    reader.readAsDataURL(file);
};