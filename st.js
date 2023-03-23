const backgrounds = [
    { title: "Walking Through Foggy Forest", link: "https://www.youtube.com/embed/Ij-8Ilis4Ic" },
    { title: "A Walk in Rainy Switzerland", link: "https://www.youtube.com/embed/LFOx-vmYrts" },
    { title: "An Autumn Forest Walk", link: "https://www.youtube.com/embed/LqbFMGVFlhk" },
    { title: "Campfire by the Sunset", link: "https://www.youtube.com/embed/RAX_I4AgjiU" },
    { title: "Winter Snowfall Walk", link: "https://www.youtube.com/embed/YpNvz0BIJ8I" },
    { title: "Watching Sunrise by the Beach", link: "https://www.youtube.com/embed/5p_SuO96Jd4" },
    { title: "A Ride Through Space", link: "https://www.youtube.com/embed/aVeMI9_YUMs" },
    { title: "Sitting by the Tropical Ocean", link: "https://www.youtube.com/embed/Nep1qytq9JM" }
]


function dostuff() {
    console.log("Something changed?");
    let title = document.getElementById("backgrounds").value;
    link = backgrounds.find(element => element.title == title).link;
    document.getElementById("mySource").src = link +"?autoplay=1&mute=1";
}

const inputField = document.querySelector('.chosen-value');
const dropdown = document.querySelector('.value-list');
const dropdownArray = [...document.querySelectorAll('li')];
console.log(typeof dropdownArray);
dropdown.classList.add('open');
inputField.focus(); // Demo purposes only
let valueArray = [];
dropdownArray.forEach(item => {
  valueArray.push(item.textContent);
});

const closeDropdown = () => {
  dropdown.classList.remove('open');
};

inputField.addEventListener('input', () => {
  dropdown.classList.add('open');
  let inputValue = inputField.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray[j].classList.add('closed');
      } else {
        dropdownArray[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray.length; i++) {
      dropdownArray[i].classList.remove('closed');
    }
  }
});

dropdownArray.forEach(item => {
  item.addEventListener('click', evt => {
    inputField.value = item.textContent;
    dropdownArray.forEach(dropdown => {
      dropdown.classList.add('closed');
    });
  });
});

inputField.addEventListener('focus', () => {
  inputField.placeholder = 'Type to filter';
  dropdown.classList.add('open');
  dropdownArray.forEach(dropdown => {
    dropdown.classList.remove('closed');
  });
});

inputField.addEventListener('blur', () => {
  inputField.placeholder = 'Select state';
  dropdown.classList.remove('open');
});

document.addEventListener('click', evt => {
  const isDropdown = dropdown.contains(evt.target);
  const isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
  }
});