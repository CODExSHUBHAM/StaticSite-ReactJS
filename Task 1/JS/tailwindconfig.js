tailwind.config = {
    theme: {
        screens:{
            'tab':'768px',
            'lap':'1024px',
            'desk':'1900px'
        },
        extend: {
            colors: {
                primary: '#001f46',
                secondary: '#ffa100',
                link: 'rgb(170, 204, 247);',
                footer: 'rgb(51, 51, 51)'
            },
            backgroundImage: {
                'hero': "url('../Assets/bg.jpeg')"
            },
            fontFamily: {
                'sans': ['Open Sans', 'sans-serif'],
                'sans-m':['Montserrat, sans-serif'],
                'serif': ['Merriweather', 'serif']
            },
            letterSpacing: {
                button: '4px'
            },
            lineHeight:{
                btn : '22.4px' 
            }
        }
    }
}