import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <img src="/assets/rpg-banner.jpg" alt="RPG Banner Image" class="banner-image">
      <h1>Welcome to Mythical Haven</h1>
      <p>Create, customize, and manage your RPG characters in Mythical Haven. Whether you're a seasoned gamer or a newcomer, our platform offers a seamless and immersive experience in the world of role-playing games.</p>
      <img src="/assets/rpg1.jpg" alt="RPG Character Image" class="content-image">
      <p>Unleash your creativity as you customize your character's traits, select from a variety of magical abilities, and shape their destiny in your campaigns. With intuitive tools and a seamless interface, you can easily bring your characters to life. Mythical Haven is designed to cater to both novice players and seasoned RPG enthusiasts, providing a perfect blend of simplicity and depth.</p>
      <p>Every character you create in Mythical Haven can be a unique reflection of your imagination. Dive deep into character development by exploring various backstories, personality traits, and motivations. Our platform ensures that each character you bring to life is not only playable but also memorable. Enjoy the freedom to experiment with different roles, from noble heroes to cunning villains, and create a rich tapestry of characters that enhance your gaming experience.</p>
      <p>In addition to character creation, Mythical Haven offers tools for managing your campaigns and storylines. Keep track of your character’s progress, inventory, and quests with ease. Our platform’s user-friendly interface makes it simple to navigate through the different aspects of your RPG universe, ensuring that you can focus on the most exciting parts of your adventure.</p>
      <img src="/assets/rpg2.jpg" alt="RPG Character Image" class="footer-image">
      <p>Join our community of RPG enthusiasts and share your epic tales. From character creation to storytelling, Mythical Haven offers a platform for players to connect, exchange ideas, and showcase their unique creations. Your adventure in Mythical Haven begins here. Unleash your imagination and create a character that stands out in any RPG world.</p>
      <p>Our community is thriving, with players from all over the world contributing to an ever-expanding universe of stories and characters. Whether you prefer solo quests or collaborative adventures, Mythical Haven is the place where your RPG dreams come to life. Start your journey today and see where your creativity takes you. Connect with fellow gamers, participate in forums, and attend virtual events to immerse yourself in the vibrant RPG culture. The possibilities are endless, and the adventure is just beginning.</p>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Roboto:wght@400;700&family=Pacifico&family=Lobster&display=swap');

    .home-container {
      text-align: center;
      font-family: 'Cinzel', serif;
      background-color: #2B0101;
      color: white;
      padding: 40px;
    }
    .navigation-menu, .footer-navigation {
      font-family: 'Lobster', cursive;
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }
    .navigation-menu a, .footer-navigation a {
      text-decoration: none;
      color: white;
      font-size: 1.2em;
    }
    .banner-image {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
    .home-container h1 {
      font-family: 'MedievalSharp';
      font-size: 2.5em;
      margin-bottom: 20px;
      color: white; /* Heading color */
    }
    .home-container p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
      line-height: 1.5;
      margin: 20px 0;
      color: white;
    }
    .content-image, .footer-image {
      max-width: 100%;
      height: auto;
      margin: 20px 0;
    }
  `]
})
export class HomeComponent {}

