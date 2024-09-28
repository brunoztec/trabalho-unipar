const topics = document.querySelectorAll('.topic');
const balloons = document.querySelectorAll('.balloon');

topics.forEach(topic => {
  const balloon = topic.nextElementSibling;

  topic.addEventListener('click', () => {
    balloon.style.display = 'block';
    balloon.style.opacity = 1;
    balloon.style.transform = 'translateY(10px)';

  });
});

balloons.forEach(balloon => {
  balloon.addEventListener('mouseover', () => {
    balloon.style.transform = 'scale(1.1)';
  });

  balloon.addEventListener('mouseout', () => {
    balloon.style.transform = 'scale(1)';
  });
});