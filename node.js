        const mainHeading = document.querySelector('h1');
        const allParagraphs = document.querySelectorAll('body > p');
        const mainOl = document.querySelector('body > ol');
        const formElement = document.querySelector('form');

        let currentPage = 'home';

        function updatePage(page) {
            const content = pageContents[page];
            if (!content) return;
            
            if (mainHeading) mainHeading.textContent = content.title;
            
            if (allParagraphs.length >= 1) {
                allParagraphs[0].textContent = content.mainParagraph;
            }
            if (allParagraphs.length >= 2 && content.secondParagraph) {
                allParagraphs[1].textContent = content.secondParagraph;
            } else if (allParagraphs.length >= 2 && !content.secondParagraph) {
                allParagraphs[1].style.display = content.secondParagraph ? 'block' : 'none';
            }
            
            if (mainOl && content.listItems.length > 0) {
                mainOl.innerHTML = content.listItems.map(item => `<li>${item}</li>`).join('');
                mainOl.style.display = 'block';
            } else if (mainOl) {
                mainOl.style.display = 'none';
            }
            
            const footerPara = document.querySelector('p:last-of-type');
            if (footerPara && footerPara !== allParagraphs[0] && footerPara !== allParagraphs[1]) {
                footerPara.textContent = content.footer;
            }
            
            if (formElement) {
                if (page === 'contact') {
                    formElement.style.display = 'block';
                } else {
                    formElement.style.display = 'block'; 
                }
            }
            
            document.querySelectorAll('#left .btn a').forEach(link => {
                link.style.fontWeight = 'normal';
                link.style.backgroundColor = 'transparent';
            });
            
            const activeLink = document.querySelector(`#left .btn a[data-page="${page}"]`);
            if (activeLink) {
                activeLink.style.fontWeight = 'bold';
                activeLink.style.backgroundColor = '#0066cc';
            }
        }
        
        const navLinks = document.querySelectorAll('#left .btn a');
        
        if (navLinks.length >= 4) {
            navLinks[0].setAttribute('data-page', 'home');
            navLinks[1].setAttribute('data-page', 'services');
            navLinks[2].setAttribute('data-page', 'about');
            navLinks[3].setAttribute('data-page', 'contact');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    if (page) {
                        currentPage = page;
                        updatePage(page);

                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        
                        showNotification(` Loading ${page.toUpperCase()} page...`, 'info');
                    }
                });
            });
        }