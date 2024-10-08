# Workout Tracker App

A mobile application to help gym go-ers track their workouts and keep a record of how much volume each exercise consisted of.

## Reasoning

I have a deep passion for the gym, and I've been wanting to learn react-native, so I though I could take this opportunity to try my hand at creating a workout tracker app.

## Project Progress

- August 30, 2024: Learned how to set up an Android emulator and got started with Expo. Played around with some react-native components.

- August 30, 2024: Started implementing the home screen where the user can start a workout from. Also got a modal to show when user start said workout.

- August 31, 2024: Within the workout modal, I completed the feature that allows the user to add exercises and sets to the exercises as well as removing the exercises and sets if the user wishes. 

- September 3, 2024: In the process of creating a database for the application. Since I'm familiar with Hibernate, I decided to use that as well as MySQL to manage the database. I created the models based off the simple diagram I created as well as the corresponding DTOs and Repositories.

- September 4, 2024: Spent a good chunk of time learning JUnit and Mockito. Was able to create some tests for UserService, and I see how valuable tests are because whenever I made changes to the models or service, the tests helped me make sure the intended outcome was still happening. Next I'm going to create a login/signup system.

## Current Feautres

- Can start an empty workout.

- Add exercises to the workout and sets to each exercise.

- Remove sets or exercises from a workout.

## Planned Features

- Have a ready-to-go dataset of exercises to choose from for the user when adding an exercise.

- User can create a new exercise if not included in said dataset.

- User can save workout templates, so they can just start a workout they have done before without having to re-enter exercises.

- Have a tab where user can see a visualization of their progress for their exercises.

- Users can create an account in order to save their workouts.