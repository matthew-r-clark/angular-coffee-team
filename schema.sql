CREATE TABLE Forum.Users (
    id int NOT NULL IDENTITY PRIMARY KEY,
    username text NOT NULL,
    first_name text NOT NULL,
    last_name text,
    email text NOT NULL
);

CREATE TABLE Forum.Topics (
    id int NOT NULL IDENTITY PRIMARY KEY,
    topic text NOT NULL UNIQUE
);

CREATE TABLE Forum.Posts (
    id int NOT NULL IDENTITY PRIMARY KEY,
    topic_id int FOREIGN KEY REFERENCES Forum.Topics(id),
    title text NOT NULL,
    user_id int FOREIGN KEY REFERENCES Forum.Users(id),
    time text NOT NULL,
    message text NOT NULL
);

CREATE TABLE Forum.Replies (
    id int NOT NULL IDENTITY PRIMARY KEY,
    post_id int FOREIGN KEY REFERENCES Forum.Posts(id),
    user_id int FOREIGN KEY REFERENCES Forum.Users(id),
    time text NOT NULL,
    message text NOT NULL
);