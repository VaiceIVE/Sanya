CREATE TABLE IF NOT EXISTS public.note
(
    id integer NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    color_id integer,
    count integer DEFAULT 0,
    click_count integer DEFAULT 0,
    url character varying COLLATE pg_catalog."default",
    CONSTRAINT note_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.color
(
    color_id integer NOT NULL,
    name character varying(128) COLLATE pg_catalog."default" NOT NULL,
    code character varying(128) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT color_pkey PRIMARY KEY (color_id)
);