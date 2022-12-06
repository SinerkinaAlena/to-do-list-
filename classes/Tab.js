class Tab {
    constructor(className) {
        this.class = className;
    }


    getTabs() {
        // Tabs
        const tabs = document.querySelectorAll('.' + this.class + ' .tab');
        const tabContents = document.querySelectorAll('.' + this.class + ' .tab_content');

        tabs.forEach((tab, idTab) => {
            tab.addEventListener('click', () => {

                // let tabActive = document.querySelector('.tab.active');
                // tabActive.classList.remove('active');
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                })

                tab.classList.add('active');

                // Contents
                tabContents.forEach((content, idContent) => {
                    if (idTab === idContent) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                })
            })

        })
    }

}

