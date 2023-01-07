const sections = document.querySelectorAll("section[id]")

function scrollActive (){
    const scrollY = window.pageYOffset;

    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
                sectionTop  = current.offsetTop -58;
                sectionId   = current.getAttribute("id")

        if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
            document.querySelector("a[href*="+sectionId+"]")
            .classList.add("active-link")
        }else{
            document.querySelector("a[href*="+sectionId+"]")
            .classList.remove("active-link")
        }

    })
}
    window.addEventListener("scroll",scrollActive)

    // scrollReveal

    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal(".headline",{
        delay:50,
        distance:"50px",
        interval: 200,
        origin:"bottom",
        reset:true,
        scale:0.5
    })


    const darkSwitchIcon = document.querySelector("#dark-switch-icon");
        const darkSwitch = document.querySelector("#dark-switch")
        const darkText = document.querySelector("#dark-text")
        // const darkChangeText = document.querySelector("#dark-text-change")
        const html = document.documentElement;
        let isDarkMode = false;

        // Switch theme function
        const toggleTheme = () => {
            isDarkMode = !isDarkMode;
            switchTheme()
        }

        const toDark = () => {
            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-900"></i>`
            // darkChangeText.innerText = 'Dark'
            darkSwitch.classList.remove('bg-slate-800')
            darkSwitch.classList.add('bg-slate-100')
            localStorage.setItem('data-theme', 'dark')
            html.classList.add('dark')
            darkText.classList.add('-translate-x-7')
            darkText.innerText = 'ON'
        }

        const toLight = () => {
            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
            // darkChangeText.innerText = 'Light'
            darkSwitch.classList.remove('bg-slate-100')
            darkSwitch.classList.add('bg-slate-800')
            localStorage.removeItem('data-theme')
            html.classList.remove('dark')
            darkText.classList.remove('-translate-x-7')
            darkText.innerText = 'FF'
            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
            setTimeout(() => {
                darkSwitchIcon.classList.remove('rotate-[360deg]')
            }, 200)
        }

        const switchTheme = () => {
            isDarkMode ? toDark() : toLight()
            // or
            // if (isDarkMode) {
            //     toDark()
            // } else {
            //     toLight()
            // }
        }


        // If you do reload the webpage,
        // doesn't change you choose theme.
        // This `dataTheme` function save permentaly choose theme.

        const dataTheme = localStorage.getItem('data-theme')

        dataTheme === 'dark' ? toDark() : toLight();
        // or
        // if(dataTheme === 'dark') {
        //     toDark()
        // } else {
        //     toLight()
        // }