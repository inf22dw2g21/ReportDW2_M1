use `adonis`;

insert into adonis.users (username, email, password, created_at, updated_at) values 
('john.doe@example.com','john.doe@example.com', '$2a$10$N5/NPl/L3W35zj0NNIPmw.xwosgE41ytw2QfaCswoFm/UQyO8UaSi', sysdate(), sysdate()),
('jane.doe@example.com','jane.doe@example.com', '$2a$10$TqhHM0UxmFrY3G0/chpk/OeW3paWoHHHU2Fk5b3y2hKwA4vXc9giO', sysdate(), sysdate());

insert into adonis.playlists (title, user_id, created_at, updated_at) values
('Relaxation Station', 1, sysdate(), sysdate()),
('Workout Jams', 1, sysdate(), sysdate()),
('Throwback Classics', 1, sysdate(), sysdate()),
('Acoustic Covers', 1, sysdate(), sysdate()),
('Morning Motivation', 2, sysdate(), sysdate()),
('Study Focus', 2, sysdate(), sysdate()),
('Romantic Dinner', 2, sysdate(), sysdate()),
('90s Nostalgia', 2, sysdate(), sysdate()),
;

insert into adonis.songs (artist, name, playlist_id, created_at, updated_at) values
('Enya', 'Only Time', 1, sysdate(), sysdate()),
('Ludovico Einaudi', 'Nuvole Bianche', 1, sysdate(), sysdate()),
('Sigur Rós', 'Untitled #3 (Samskeyti)', 1, sysdate(), sysdate()),
('Eminem', 'Lose Yourself', 2, sysdate(), sysdate()),
('Kanye West', 'Stronger', 2, sysdate(), sysdate()),
('Daft Punk', 'Harder, Better, Faster, Stronger', 2, sysdate(), sysdate()),
('Queen', 'Bohemian Rhapsody', 3, sysdate(), sysdate()),
('Michael Jackson', 'Thriller', 3, sysdate(), sysdate()),
('The Beatles', 'Hey Jude', 3, sysdate(), sysdate()),
('Boyce Avenue', 'We Can't Stop', 4, sysdate(), sysdate()),
('Ed Sheeran', 'Shape of You (Acoustic)', 4, sysdate(), sysdate()),
('Alessia Cara', 'Scars to Your Beautiful (Acoustic)', 4, sysdate(), sysdate()),
('Imagine Dragons', 'Believer', 5, sysdate(), sysdate()),
('Eminem', 'Till I Collapse', 5, sysdate(), sysdate()),
('Kanye West', 'Power', 5, sysdate(), sysdate()),
('Max Richter', 'On the Nature of Daylight', 6, sysdate(), sysdate()),
('Ludovico Einaudi', 'Experience', 6, sysdate(), sysdate()),
('Hans Zimmer', 'Time', 6, sysdate(), sysdate()),
('John Legend', 'All of Me', 7, sysdate(), sysdate()),
('Ed Sheeran', 'Perfect', 7, sysdate(), sysdate()),
('Adele', 'Make You Feel My Love', 7, sysdate(), sysdate()),
('Spice Girls', 'Wannabe', 8, sysdate(), sysdate()),
('Backstreet Boys', 'Everybody (Backstreet's Back)', 8, sysdate(), sysdate()),
('Britney Spears', '...Baby One More Time', 8, sysdate(), sysdate())
;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'secret'