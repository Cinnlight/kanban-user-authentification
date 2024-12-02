import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
const seedAll = async () => {
    try {
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');
        await seedTickets();
        console.log('\n----- TICKETS SEEDED -----\n');
        console.log('Seeding process completed.');
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
};
export default seedAll; // Export the seedAll function
