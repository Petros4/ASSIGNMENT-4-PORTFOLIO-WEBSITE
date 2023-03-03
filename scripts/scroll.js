// Const για όλα τα links με το class scrollLink
const scrollLinks = document.querySelectorAll('.scrollLink');

// ForEach για να πάει σε όλα τα links και event listener για το κάθε link
scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // preventDefault γιατί χωρίς αυτό ο browser θα πάει απευθείας στο div χωρίς το scolling effect. (για να δουλεύσει πρόσθεσα στην css scroll-behavior: smooth;)
    event.preventDefault();
    // Πέρνουμε το div χρησιμοποιώντας το href attribute που δόθηκε
    const target = document.querySelector(link.getAttribute('href'));
    // scrollIntoView για να παέι στην αρχή του div
    target.scrollIntoView({ behavior: 'smooth' });
  });
});