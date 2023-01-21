/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'mow the lawn'},
    {id: 2, task: 'take out the trash'},
    {id: 3, task: 'wash the car'}
  ]);
};
