javascript:(function() {
    const themes = {
      default: {
        bodyClass: '',
        h1Class: ''
      },
      dark: {
        bodyClass: 'dark',
        h1Class: 'dark'
      },
      light: {
        bodyClass: 'light',
        h1Class: 'light'
      },
      emergency: {
        bodyClass: 'emergency',
        h1Class: 'emergency'
      }
    };
  
    function setTheme(theme) {
      document.body.classList.remove('dark', 'light', 'emergency');
      document.querySelector('h1')?.classList.remove('dark', 'light', 'emergency');
      
      document.body.classList.add(themes[theme].bodyClass);
      if (document.querySelector('h1')) {
        document.querySelector('h1').classList.add(themes[theme].h1Class);
      }
  
      
      localStorage.setItem('savedTheme', theme);
      alert(`Theme set to ${theme}`);
    }
  
    const savedTheme = localStorage.getItem('savedTheme') || 'default';
    setTheme(savedTheme);
  
    const themeChoice = prompt("Enter theme name (default, dark, light, emergency):", savedTheme);
    if (themes[themeChoice]) {
      setTheme(themeChoice);
    } else {
      alert('Invalid theme name!');
    }
  })();
  