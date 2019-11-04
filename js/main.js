$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9',
            'page10', 'page11', 'page12', 'page13'],
        sectionsColor: ['#ce983a', '#8a8a8a', '#102877', '#0f1745', '#0b3b79', '#71af0f', '#1b3596',
            '#7b572f', '#485013', '#253c87', '#a22729', '#102877', '#111111'],
        navigation: { //#7aa1ff
            'position': 'right',
            'tooltips': ['Home', 'Blind Assistant', 'Techno Titans VP', 'Programming Club VP', 'Senslytics Intern',
                'Sleep Apnea AI','Destination: Titan', 'Mole Project', 'Space Invaders', 'SmartLib', 'Titan Power Up',
                'Techno Titans', 'The Game Palace']
        },

        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});
