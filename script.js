function search()
{
    const xhr = new XMLHttpRequest();
    let id = document.getElementById('search').value;
    xhr.onload = function()
    {
        let data = this.responseText;
        data=JSON.parse(data);
        display(data);
    }
    xhr.open("GET" , `https://api.tvmaze.com/search/shows?q=${id}`);
    xhr.send();
}

function display(data)
{
    document.getElementById('search').value = "";
    let raghav=``;
    for(let i of data)
    {
        raghav+=` <img src="${i.show.image.medium}" alt="">`;
    }
    document.getElementById('show').innerHTML = raghav;
}


const theme = document.querySelectorAll(`[name="theme"]`);
console.log(theme);

const storeTheme = function(theme)
{
    localStorage.setItem('theme',theme);
}

theme.forEach(themeoption => {
    themeoption.addEventListener('click',()=>{
        storeTheme(themeoption.id);
    })
});

const applyTheme = function()
{
    const activetheme = localStorage.getItem('theme');

    document.getElementById(activetheme).checked = true;
}
document.onload = applyTheme();

