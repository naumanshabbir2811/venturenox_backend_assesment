--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg120+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tenant_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tenant_profiles (
    tenant_id integer NOT NULL,
    name character varying(255),
    address json,
    city character varying(255),
    state character varying(255),
    country character varying(255),
    zip_code character varying(255),
    phone character varying(255),
    web_url character varying(255),
    is_active boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tenant_profiles OWNER TO postgres;

--
-- Name: tenant_profiles_tenant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tenant_profiles_tenant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tenant_profiles_tenant_id_seq OWNER TO postgres;

--
-- Name: tenant_profiles_tenant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tenant_profiles_tenant_id_seq OWNED BY public.tenant_profiles.tenant_id;


--
-- Name: user_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_profiles (
    id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    department character varying(255),
    designation character varying(255),
    image_url character varying(255),
    city character varying(255),
    country character varying(255),
    bio character varying(255),
    social_links json,
    employee_id integer,
    is_active boolean NOT NULL,
    tenant_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.user_profiles OWNER TO postgres;

--
-- Name: user_profiles_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_profiles_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_profiles_user_id_seq OWNER TO postgres;

--
-- Name: user_profiles_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_profiles_user_id_seq OWNED BY public.user_profiles.id;


--
-- Name: tenant_profiles tenant_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenant_profiles ALTER COLUMN tenant_id SET DEFAULT nextval('public.tenant_profiles_tenant_id_seq'::regclass);


--
-- Name: user_profiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles ALTER COLUMN id SET DEFAULT nextval('public.user_profiles_user_id_seq'::regclass);


--
-- Data for Name: tenant_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tenant_profiles (tenant_id, name, address, city, state, country, zip_code, phone, web_url, is_active, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_profiles (id, first_name, last_name, department, designation, image_url, city, country, bio, social_links, employee_id, is_active, tenant_id, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: tenant_profiles_tenant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tenant_profiles_tenant_id_seq', 120, true);


--
-- Name: user_profiles_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_profiles_user_id_seq', 1, false);


--
-- Name: tenant_profiles tenant_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenant_profiles
    ADD CONSTRAINT tenant_profiles_pkey PRIMARY KEY (tenant_id);


--
-- Name: user_profiles user_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_pkey PRIMARY KEY (id);


--
-- Name: user_profiles user_profiles_tenant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_profiles
    ADD CONSTRAINT user_profiles_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenant_profiles(tenant_id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

