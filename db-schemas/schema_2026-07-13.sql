--
-- PostgreSQL database dump
--

\restrict tOTCbgrOIP6XgNrqc5Bo597a8iQ6yf2smQmohFiFgYEoPI8Q70ftStMfMx6t45Q

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.10 (Ubuntu 17.10-1.pgdg24.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA auth;


--
-- Name: extensions; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA extensions;


--
-- Name: graphql; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql;


--
-- Name: graphql_public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA graphql_public;


--
-- Name: pgbouncer; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA pgbouncer;


--
-- Name: realtime; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA realtime;


--
-- Name: storage; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA storage;


--
-- Name: vault; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA vault;


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA extensions;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: supabase_vault; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS supabase_vault WITH SCHEMA vault;


--
-- Name: EXTENSION supabase_vault; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION supabase_vault IS 'Supabase Vault Extension';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: aal_level; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.aal_level AS ENUM (
    'aal1',
    'aal2',
    'aal3'
);


--
-- Name: code_challenge_method; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.code_challenge_method AS ENUM (
    's256',
    'plain'
);


--
-- Name: factor_status; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_status AS ENUM (
    'unverified',
    'verified'
);


--
-- Name: factor_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.factor_type AS ENUM (
    'totp',
    'webauthn',
    'phone'
);


--
-- Name: oauth_authorization_status; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_authorization_status AS ENUM (
    'pending',
    'approved',
    'denied',
    'expired'
);


--
-- Name: oauth_client_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_client_type AS ENUM (
    'public',
    'confidential'
);


--
-- Name: oauth_registration_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_registration_type AS ENUM (
    'dynamic',
    'manual'
);


--
-- Name: oauth_response_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.oauth_response_type AS ENUM (
    'code'
);


--
-- Name: one_time_token_type; Type: TYPE; Schema: auth; Owner: -
--

CREATE TYPE auth.one_time_token_type AS ENUM (
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token'
);


--
-- Name: action; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.action AS ENUM (
    'INSERT',
    'UPDATE',
    'DELETE',
    'TRUNCATE',
    'ERROR'
);


--
-- Name: equality_op; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.equality_op AS ENUM (
    'eq',
    'neq',
    'lt',
    'lte',
    'gt',
    'gte',
    'in',
    'like',
    'ilike',
    'is',
    'match',
    'imatch',
    'isdistinct'
);


--
-- Name: user_defined_filter; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.user_defined_filter AS (
	column_name text,
	op realtime.equality_op,
	value text,
	negate boolean
);


--
-- Name: wal_column; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_column AS (
	name text,
	type_name text,
	type_oid oid,
	value jsonb,
	is_pkey boolean,
	is_selectable boolean
);


--
-- Name: wal_rls; Type: TYPE; Schema: realtime; Owner: -
--

CREATE TYPE realtime.wal_rls AS (
	wal jsonb,
	is_rls_enabled boolean,
	subscription_ids uuid[],
	errors text[]
);


--
-- Name: buckettype; Type: TYPE; Schema: storage; Owner: -
--

CREATE TYPE storage.buckettype AS ENUM (
    'STANDARD',
    'ANALYTICS',
    'VECTOR'
);


--
-- Name: email(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.email() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text
$$;


--
-- Name: FUNCTION email(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.email() IS 'Deprecated. Use auth.jwt() -> ''email'' instead.';


--
-- Name: jwt(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.jwt() RETURNS jsonb
    LANGUAGE sql STABLE
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim', true), ''),
        nullif(current_setting('request.jwt.claims', true), '')
    )::jsonb
$$;


--
-- Name: role(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.role() RETURNS text
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text
$$;


--
-- Name: FUNCTION role(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.role() IS 'Deprecated. Use auth.jwt() -> ''role'' instead.';


--
-- Name: uid(); Type: FUNCTION; Schema: auth; Owner: -
--

CREATE FUNCTION auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  select 
  coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid
$$;


--
-- Name: FUNCTION uid(); Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON FUNCTION auth.uid() IS 'Deprecated. Use auth.jwt() -> ''sub'' instead.';


--
-- Name: grant_pg_cron_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_cron_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_cron'
  )
  THEN
    grant usage on schema cron to postgres with grant option;

    alter default privileges in schema cron grant all on tables to postgres with grant option;
    alter default privileges in schema cron grant all on functions to postgres with grant option;
    alter default privileges in schema cron grant all on sequences to postgres with grant option;

    alter default privileges for user supabase_admin in schema cron grant all
        on sequences to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on tables to postgres with grant option;
    alter default privileges for user supabase_admin in schema cron grant all
        on functions to postgres with grant option;

    grant all privileges on all tables in schema cron to postgres with grant option;
    revoke all on table cron.job from postgres;
    grant select on table cron.job to postgres with grant option;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_cron_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_cron_access() IS 'Grants access to pg_cron';


--
-- Name: grant_pg_graphql_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_graphql_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
begin
    if not exists (
        select 1
        from pg_event_trigger_ddl_commands() ev
        join pg_catalog.pg_extension e on ev.objid = e.oid
        where e.extname = 'pg_graphql'
    ) then
        return;
    end if;

    drop function if exists graphql_public.graphql;
    create or replace function graphql_public.graphql(
        "operationName" text default null,
        query text default null,
        variables jsonb default null,
        extensions jsonb default null
    )
        returns jsonb
        language sql
    as $$
        select graphql.resolve(
            query := query,
            variables := coalesce(variables, '{}'),
            "operationName" := "operationName",
            extensions := extensions
        );
    $$;

    -- Attach the wrapper to the extension so DROP EXTENSION cascades to it,
    -- which in turn triggers set_graphql_placeholder to reinstall the "not enabled" stub.
    alter extension pg_graphql add function graphql_public.graphql(text, text, jsonb, jsonb);

    grant usage on schema graphql to postgres, anon, authenticated, service_role;
    grant execute on function graphql.resolve to postgres, anon, authenticated, service_role;
    grant usage on schema graphql to postgres with grant option;
    grant usage on schema graphql_public to postgres with grant option;
end;
$_$;


--
-- Name: FUNCTION grant_pg_graphql_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_graphql_access() IS 'Grants access to pg_graphql';


--
-- Name: grant_pg_net_access(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.grant_pg_net_access() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_event_trigger_ddl_commands() AS ev
    JOIN pg_extension AS ext
    ON ev.objid = ext.oid
    WHERE ext.extname = 'pg_net'
  )
  THEN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_functions_admin'
    )
    THEN
      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;
    END IF;

    GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

    IF EXISTS (
      SELECT FROM pg_extension
      WHERE extname = 'pg_net'
      -- all versions in use on existing projects as of 2025-02-20
      -- version 0.12.0 onwards don't need these applied
      AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
    ) THEN
      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

      ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
      ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

      REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
      REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

      GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
    END IF;
  END IF;
END;
$$;


--
-- Name: FUNCTION grant_pg_net_access(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.grant_pg_net_access() IS 'Grants access to pg_net';


--
-- Name: pgrst_ddl_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_ddl_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  cmd record;
BEGIN
  FOR cmd IN SELECT * FROM pg_event_trigger_ddl_commands()
  LOOP
    IF cmd.command_tag IN (
      'CREATE SCHEMA', 'ALTER SCHEMA'
    , 'CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO', 'ALTER TABLE'
    , 'CREATE FOREIGN TABLE', 'ALTER FOREIGN TABLE'
    , 'CREATE VIEW', 'ALTER VIEW'
    , 'CREATE MATERIALIZED VIEW', 'ALTER MATERIALIZED VIEW'
    , 'CREATE FUNCTION', 'ALTER FUNCTION'
    , 'CREATE TRIGGER'
    , 'CREATE TYPE', 'ALTER TYPE'
    , 'CREATE RULE'
    , 'COMMENT'
    )
    -- don't notify in case of CREATE TEMP table or other objects created on pg_temp
    AND cmd.schema_name is distinct from 'pg_temp'
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: pgrst_drop_watch(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.pgrst_drop_watch() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  obj record;
BEGIN
  FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()
  LOOP
    IF obj.object_type IN (
      'schema'
    , 'table'
    , 'foreign table'
    , 'view'
    , 'materialized view'
    , 'function'
    , 'trigger'
    , 'type'
    , 'rule'
    )
    AND obj.is_temporary IS false -- no pg_temp objects
    THEN
      NOTIFY pgrst, 'reload schema';
    END IF;
  END LOOP;
END; $$;


--
-- Name: set_graphql_placeholder(); Type: FUNCTION; Schema: extensions; Owner: -
--

CREATE FUNCTION extensions.set_graphql_placeholder() RETURNS event_trigger
    LANGUAGE plpgsql
    AS $_$
    DECLARE
    graphql_is_dropped bool;
    BEGIN
    graphql_is_dropped = (
        SELECT ev.schema_name = 'graphql_public'
        FROM pg_event_trigger_dropped_objects() AS ev
        WHERE ev.schema_name = 'graphql_public'
    );

    IF graphql_is_dropped
    THEN
        create or replace function graphql_public.graphql(
            "operationName" text default null,
            query text default null,
            variables jsonb default null,
            extensions jsonb default null
        )
            returns jsonb
            language plpgsql
        as $$
            DECLARE
                server_version float;
            BEGIN
                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);

                IF server_version >= 14 THEN
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql extension is not enabled.'
                            )
                        )
                    );
                ELSE
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'
                            )
                        )
                    );
                END IF;
            END;
        $$;
    END IF;

    END;
$_$;


--
-- Name: FUNCTION set_graphql_placeholder(); Type: COMMENT; Schema: extensions; Owner: -
--

COMMENT ON FUNCTION extensions.set_graphql_placeholder() IS 'Reintroduces placeholder function for graphql_public.graphql';


--
-- Name: graphql(text, text, jsonb, jsonb); Type: FUNCTION; Schema: graphql_public; Owner: -
--

CREATE FUNCTION graphql_public.graphql("operationName" text DEFAULT NULL::text, query text DEFAULT NULL::text, variables jsonb DEFAULT NULL::jsonb, extensions jsonb DEFAULT NULL::jsonb) RETURNS jsonb
    LANGUAGE plpgsql
    AS $$
            DECLARE
                server_version float;
            BEGIN
                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);

                IF server_version >= 14 THEN
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql extension is not enabled.'
                            )
                        )
                    );
                ELSE
                    RETURN jsonb_build_object(
                        'errors', jsonb_build_array(
                            jsonb_build_object(
                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'
                            )
                        )
                    );
                END IF;
            END;
        $$;


--
-- Name: get_auth(text); Type: FUNCTION; Schema: pgbouncer; Owner: -
--

CREATE FUNCTION pgbouncer.get_auth(p_usename text) RETURNS TABLE(username text, password text)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO ''
    AS $_$
  BEGIN
      RAISE DEBUG 'PgBouncer auth request: %', p_usename;

      RETURN QUERY
      SELECT
          rolname::text,
          CASE WHEN rolvaliduntil < now()
              THEN null
              ELSE rolpassword::text
          END
      FROM pg_authid
      WHERE rolname=$1 and rolcanlogin;
  END;
  $_$;


--
-- Name: admin_validate_email(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.admin_validate_email(target_user_id uuid) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- 🛡️ Vérification absolue : l'appelant DOIT être un super_admin !
  IF EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'super_admin') THEN
    UPDATE auth.users SET email_confirmed_at = now() WHERE id = target_user_id;
  ELSE
    RAISE EXCEPTION 'Accès refusé. Réservé au Conseil Restreint.';
  END IF;
END;
$$;


--
-- Name: award_xp(uuid, integer, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.award_xp(p_character_id uuid, p_amount integer, p_motif text DEFAULT ''::text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
      DECLARE
        v_user_id uuid;
        v_character_nom text;
      BEGIN
        SELECT user_id, nom INTO v_user_id, v_character_nom FROM characters WHERE id = p_character_id;
        IF NOT FOUND THEN
          RAISE EXCEPTION 'Personnage introuvable.';
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM cercle_membres cm
          JOIN cercles c ON c.id = cm.cercle_id
          WHERE cm.character_id = p_character_id AND c.docte_id = auth.uid()
        ) THEN
          RAISE EXCEPTION 'Seul le Docte du Cercle peut attribuer des XP à cet Héritier.';
        END IF;

        IF p_amount = 0 THEN RETURN; END IF;

        UPDATE characters SET xp_total = xp_total + p_amount WHERE id = p_character_id;

        INSERT INTO xp_transactions (character_id, type, code, label, valeur, date_mouvement)
        VALUES (
          p_character_id,
          'GAIN',
          CASE WHEN p_amount > 0 THEN 'XP_GAIN' ELSE 'XP_AJUSTEMENT' END,
          p_motif,
          ABS(p_amount),
          NOW()
        );
      END;
      $$;


--
-- Name: check_pending_gifts(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.check_pending_gifts() RETURNS boolean
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Renvoie TRUE si au moins un personnage possède un code de transfert
  RETURN EXISTS (SELECT 1 FROM public.characters WHERE transfer_code IS NOT NULL);
END;
$$;


--
-- Name: claim_character_by_code(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.claim_character_by_code(p_code text) RETURNS uuid
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_char_id uuid;
BEGIN
  -- On cherche le personnage correspondant au code
  SELECT id INTO v_char_id
  FROM public.characters
  WHERE transfer_code = p_code
  LIMIT 1;

  -- Si on ne trouve rien, on crie au scandale
  IF v_char_id IS NULL THEN
    RAISE EXCEPTION 'Ce Parchemin Scellé est invalide ou a déjà été utilisé.';
  END IF;

  -- Le Notaire valide le transfert (On change l'ID du propriétaire et on détruit le code)
  UPDATE public.characters
  SET user_id = auth.uid(),
      transfer_code = NULL,
      updated_at = NOW()
  WHERE id = v_char_id;

  RETURN v_char_id;
END;
$$;


--
-- Name: clone_snapshot_to_character(uuid, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.clone_snapshot_to_character(p_snapshot_id uuid, p_new_name text) RETURNS uuid
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
    DECLARE
      v_snap record;
      v_new_id uuid;
      v_char jsonb;
    BEGIN
      SELECT * INTO v_snap FROM character_snapshots WHERE id = p_snapshot_id;
      IF NOT FOUND THEN
        RAISE EXCEPTION 'Archive introuvable.';
      END IF;

      v_char := v_snap.character_data;
      v_new_id := gen_random_uuid();

      INSERT INTO characters (
        id, user_id, nom, sexe, type_fee, data,
        caracteristiques, competences_libres, competences_futiles,
        pouvoirs, atouts, vie_sociale, fortune,
        profils, xp_total, xp_depense, is_public,
        apparence, taille, poids, nom_feerique, genre_humain,
        traits_feeriques, capacite_choisie, statut, anciennete
      ) VALUES (
        v_new_id,
        v_snap.user_id,
        p_new_name,
        v_char->>'sexe',
        v_char->>'typeFee',
        v_char->'data',
        v_char->'caracteristiques',
        v_char->'competencesLibres',
        v_char->'competencesFutiles',
        v_char->'pouvoirs',
        v_char->'atouts',
        v_char->'vieSociale',
        (v_char->>'fortune')::smallint,
        v_char->'profils',
        (v_char->>'xp_total')::integer,
        (v_char->>'xp_depense')::integer,
        false,
        v_char->>'apparence',
        v_char->>'taille',
        v_char->>'poids',
        v_char->>'nomFeerique',
        v_char->>'genreHumain',
        v_char->'traitsFeeriques',
        v_char->>'capaciteChoisie',
        v_char->>'statut',
        v_char->>'anciennete'
      );

      RETURN v_new_id;
    END;
    $$;


--
-- Name: distribute_session_xp(uuid, uuid[], integer, text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.distribute_session_xp(p_session_id uuid, p_character_ids uuid[], p_amount integer, p_label text DEFAULT ''::text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
      DECLARE
        v_cercle_id UUID;
        v_char_id   UUID;
      BEGIN
        SELECT cercle_id INTO v_cercle_id FROM sessions_jeu WHERE id = p_session_id;
        IF NOT FOUND THEN RAISE EXCEPTION 'Session introuvable.'; END IF;

        IF NOT (
          EXISTS (SELECT 1 FROM cercle_membres WHERE cercle_id = v_cercle_id AND user_id = auth.uid())
          OR EXISTS (SELECT 1 FROM cercles WHERE id = v_cercle_id AND docte_id = auth.uid())
        ) THEN
          RAISE EXCEPTION 'Accès refusé : vous n''êtes pas membre de ce Cercle.';
        END IF;

        IF p_amount = 0 THEN RETURN; END IF;

        FOREACH v_char_id IN ARRAY p_character_ids LOOP
          UPDATE characters SET xp_total = xp_total + p_amount WHERE id = v_char_id;
          INSERT INTO xp_transactions (character_id, type, code, label, valeur, date_mouvement)
          VALUES (
            v_char_id,
            'GAIN',
            CASE WHEN p_amount > 0 THEN 'SESSION_XP' ELSE 'SESSION_XP_CORRECTION' END,
            p_label,
            ABS(p_amount),
            NOW()
          );
        END LOOP;

        UPDATE sessions_jeu SET xp_attribue = true, updated_at = NOW() WHERE id = p_session_id;
      END;
      $$;


--
-- Name: execute_dynamic_sql(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.execute_dynamic_sql(sql_query text) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  user_role text;
BEGIN
  -- Récupération du rôle de la personne qui lance le sort
  SELECT role INTO user_role FROM public.profiles WHERE id = auth.uid();

  -- Vérification stricte : Seuls le Super Admin ET les Gardiens ont le droit !
  IF user_role NOT IN ('super_admin', 'gardien') THEN
    RAISE EXCEPTION 'Accès refusé : Magie noire interdite aux simples Héritiers.';
  END IF;
  
  EXECUTE sql_query;
END;
$$;


--
-- Name: get_admin_stats(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_admin_stats() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  caller_role TEXT;
  result json;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role NOT IN ('super_admin', 'gardien') THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  SELECT json_build_object(
    'total_profiles', (SELECT count(*) FROM profiles),
    'total_characters', (SELECT count(*) FROM characters),
    'total_sealed', (SELECT count(*) FROM characters WHERE statut = 'scelle'),
    'total_cercles', (SELECT count(*) FROM cercles)
  ) INTO result;
  RETURN result;
END;
$$;


--
-- Name: get_admin_users(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_admin_users() RETURNS TABLE(id uuid, username text, role text, created_at timestamp with time zone, last_seen timestamp with time zone, badges text[], active_badge text, email text, is_verified boolean, is_initiated boolean)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  -- Vérification stricte des droits
  IF NOT EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND (profiles.role = 'super_admin' OR profiles.role = 'gardien')
  ) THEN
    RAISE EXCEPTION 'Accès refusé : Seuls les Gardiens peuvent lire ce registre.';
  END IF;

  RETURN QUERY
  SELECT 
    p.id,
    p.username,
    p.role,
    p.created_at,
    p.last_seen,
    p.badges,
    p.active_badge,
    u.email::text,
    (u.email_confirmed_at IS NOT NULL) AS is_verified,
    p.is_initiated -- ✨ LA LECTURE DU SCEAU ICI
  FROM profiles p
  JOIN auth.users u ON p.id = u.id;
END;
$$;


--
-- Name: get_article_dates(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_article_dates() RETURNS TABLE(date_col date)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
      BEGIN
        RETURN QUERY
        SELECT DISTINCT ja.date
        FROM journal_articles ja
        WHERE ja.category NOT IN ('Météo', 'Lune', 'Meteo')
        ORDER BY ja.date;
      END;
      $$;


--
-- Name: get_cercle_members(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_cercle_members(p_cercle_id uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  result JSONB;
BEGIN
  SELECT COALESCE(JSONB_AGG(
    JSONB_BUILD_OBJECT(
      'id', cm.id,
      'user_id', cm.user_id,
      'joined_at', cm.joined_at,
      'profiles', JSONB_BUILD_OBJECT(
        'username', p.username,
        'unlocked_fairies', p.unlocked_fairies
      ),
      'characters', CASE WHEN c.id IS NOT NULL THEN
        JSONB_BUILD_OBJECT(
          'id', c.id,
          'nom', c.nom,
          'sexe', c.sexe,
          'apparence', c.apparence,
          'genreHumain', c.genre_humain,
          'typeFee', c.type_fee,
          'statut', c.statut,
          'xp_total', c.xp_total,
          'xp_depense', c.xp_depense,
          'portrait_masked_url', c.portrait_masked_url,
          'portrait_unmasked_url', c.portrait_unmasked_url,
          'is_unmasked_revealed', c.is_unmasked_revealed
        )
      ELSE NULL END
    )
    ORDER BY cm.joined_at
  ), '[]'::JSONB) INTO result
  FROM cercle_membres cm
  LEFT JOIN profiles p ON p.id = cm.user_id
  LEFT JOIN characters c ON c.id = cm.character_id
  WHERE cm.cercle_id = p_cercle_id;
  RETURN result;
END;
$$;


--
-- Name: get_community_stats_detail(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_community_stats_detail() RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
  caller_role TEXT;
  thirty_days_ago timestamptz := NOW() - INTERVAL '30 days';
  result json;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role NOT IN ('super_admin', 'gardien') THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  SELECT json_build_object(
    'fees', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT type_fee, COUNT(*)::int AS count
        FROM characters WHERE type_fee IS NOT NULL
        GROUP BY type_fee
      ) t
    ),
    'profils_majeurs', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT profils->'majeur'->>'nom' AS nom, COUNT(*)::int AS count
        FROM characters WHERE profils->'majeur'->>'nom' IS NOT NULL
        GROUP BY profils->'majeur'->>'nom'
      ) t
    ),
    'profils_mineurs', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT profils->'mineur'->>'nom' AS nom, COUNT(*)::int AS count
        FROM characters WHERE profils->'mineur'->>'nom' IS NOT NULL
        GROUP BY profils->'mineur'->>'nom'
      ) t
    ),
    'active_users', (
      SELECT COUNT(DISTINCT user_id)::int FROM characters
      WHERE updated_at > thirty_days_ago
    )
  ) INTO result;
  RETURN result;
END;
$$;


--
-- Name: get_my_cercles(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_my_cercles() RETURNS SETOF uuid
    LANGUAGE sql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
    SELECT id FROM cercles WHERE docte_id = auth.uid()
    UNION
    SELECT cercle_id FROM cercle_membres WHERE user_id = auth.uid();
$$;


--
-- Name: get_notification_stats(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_notification_stats() RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  caller_role TEXT;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role != 'super_admin' THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  RETURN (
    SELECT JSONB_BUILD_OBJECT(
      'total',  COUNT(*) FILTER (WHERE subscribe_to_updates = true),
      'major',  COUNT(*) FILTER (WHERE subscribe_to_updates = true AND notify_major_versions = true),
      'minor',  COUNT(*) FILTER (WHERE subscribe_to_updates = true AND notify_minor_versions = true)
    )
    FROM user_notification_preferences
  );
END;
$$;


--
-- Name: get_popular_fairy_types(integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_popular_fairy_types(limit_count integer DEFAULT 10) RETURNS TABLE(type_fee character varying, count bigint)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.type_fee,
    COUNT(*) as count
  FROM characters c
  GROUP BY c.type_fee
  ORDER BY count DESC
  LIMIT limit_count;
END;
$$;


--
-- Name: FUNCTION get_popular_fairy_types(limit_count integer); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.get_popular_fairy_types(limit_count integer) IS 'Retourne les types de fées les plus utilisés';


--
-- Name: get_top_outil_users(integer); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_top_outil_users(limit_n integer DEFAULT 5) RETURNS TABLE(email text, total bigint)
    LANGUAGE sql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
    SELECT u.email::TEXT, COUNT(*)::BIGINT AS total
    FROM outil_usage o
    JOIN auth.users u ON u.id = o.user_id
    GROUP BY u.email
    ORDER BY total DESC
    LIMIT limit_n;
  $$;


--
-- Name: get_user_character_count(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_user_character_count(p_user_id uuid) RETURNS integer
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM characters
    WHERE user_id = p_user_id
  );
END;
$$;


--
-- Name: FUNCTION get_user_character_count(p_user_id uuid); Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON FUNCTION public.get_user_character_count(p_user_id uuid) IS 'Retourne le nombre de personnages créés par un utilisateur';


--
-- Name: get_user_role(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_user_role(user_id uuid) RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role FROM profiles WHERE id = user_id;
  RETURN COALESCE(user_role, 'user');
END;
$$;


--
-- Name: get_users_to_notify(text); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.get_users_to_notify(version_type text) RETURNS TABLE(user_id uuid, email text)
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  caller_role TEXT;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role != 'super_admin' THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  RETURN QUERY
  SELECT p.user_id, p.email
  FROM user_notification_preferences p
  WHERE p.subscribe_to_updates = true
    AND p.email IS NOT NULL
    AND (
      (version_type = 'major' AND p.notify_major_versions = true)
      OR
      (version_type = 'minor' AND p.notify_minor_versions = true)
    );
END;
$$;


--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    new.raw_user_meta_data->>'username' -- Récupère le pseudo envoyé par votre Auth.js
  );
  return new;
end;
$$;


--
-- Name: join_cercle_by_code(text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.join_cercle_by_code(p_code text, p_character_id uuid) RETURNS json
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
DECLARE
  v_cercle_id UUID;
BEGIN
  -- 1. On cherche le cercle
  SELECT id INTO v_cercle_id FROM public.cercles WHERE code_invitation = p_code;
  
  IF v_cercle_id IS NULL THEN
    RAISE EXCEPTION 'Ce code d''invitation n''existe pas ou a été effacé.';
  END IF;

  -- 2. On insère le joueur
  INSERT INTO public.cercle_membres (cercle_id, user_id, character_id)
  VALUES (v_cercle_id, auth.uid(), p_character_id);

  RETURN json_build_object('success', true, 'cercle_id', v_cercle_id);
END;
$$;


--
-- Name: purge_encyclopedia_entity(text, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.purge_encyclopedia_entity(p_table_name text, p_record_id uuid) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $_$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin', 'gardien')) THEN
        RAISE EXCEPTION 'Accès refusé. Réservé aux Gardiens.';
      END IF;

      IF p_table_name = 'fairy_types' THEN
        DELETE FROM fairy_type_capacites WHERE fairy_type_id = p_record_id;
        DELETE FROM fairy_type_powers WHERE fairy_type_id = p_record_id;
        DELETE FROM fairy_type_assets WHERE fairy_type_id = p_record_id;
        DELETE FROM fairy_competences_predilection WHERE fairy_type_id = p_record_id;
        DELETE FROM fairy_competences_futiles_predilection WHERE fairy_type_id = p_record_id;
      END IF;

      IF p_table_name = 'fairy_capacites' THEN
        DELETE FROM fairy_type_capacites WHERE capacite_id = p_record_id;
      ELSIF p_table_name = 'fairy_powers' THEN
        DELETE FROM fairy_type_powers WHERE power_id = p_record_id;
      ELSIF p_table_name = 'fairy_assets' THEN
        DELETE FROM fairy_type_assets WHERE asset_id = p_record_id;
      END IF;

      EXECUTE format('DELETE FROM %I WHERE id = $1', p_table_name) USING p_record_id;
    END;
    $_$;


--
-- Name: reveal_ombre_consequence(uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.reveal_ombre_consequence(p_consequence_id uuid) RETURNS jsonb
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
      DECLARE
        v_ombre    RECORD;
        v_char     RECORD;
        v_joueur_id UUID;
        v_docte_id  UUID;
        v_channel_id UUID;
        v_titre_chronique TEXT;
      BEGIN
        v_docte_id := auth.uid();

        SELECT * INTO v_ombre FROM public.ombre_consequences WHERE id = p_consequence_id;
        IF NOT FOUND THEN RAISE EXCEPTION 'Conséquence introuvable'; END IF;
        IF v_ombre.created_by <> v_docte_id THEN RAISE EXCEPTION 'Non autorisé'; END IF;
        IF v_ombre.est_revelee THEN RAISE EXCEPTION 'Déjà révélée'; END IF;

        SELECT ch.*, u.id AS joueur_id INTO v_char
        FROM public.characters ch
        INNER JOIN auth.users u ON u.id = ch.user_id
        WHERE ch.id = v_ombre.character_id;

        IF NOT FOUND THEN RAISE EXCEPTION 'Personnage introuvable'; END IF;
        v_joueur_id := v_char.joueur_id;

        -- Titre de la session si dispo
        SELECT titre INTO v_titre_chronique
        FROM public.sessions_jeu
        WHERE id = v_ombre.session_id
        LIMIT 1;

        -- Révèle
        UPDATE public.ombre_consequences
          SET est_revelee = true, revelee_at = NOW()
        WHERE id = p_consequence_id;

        -- Trouve ou crée le canal privé Docte ↔ Joueur
        SELECT id INTO v_channel_id FROM public.chat_channels
        WHERE type = 'private'
          AND (
            (participant_1 = v_docte_id AND participant_2 = v_joueur_id)
            OR (participant_1 = v_joueur_id AND participant_2 = v_docte_id)
          )
        LIMIT 1;

        IF v_channel_id IS NULL THEN
          DECLARE v_username TEXT;
          BEGIN
            SELECT username INTO v_username FROM public.profiles WHERE id = v_joueur_id;
            INSERT INTO public.chat_channels (type, name, participant_1, participant_2, last_message_at)
            VALUES (
              'private',
              COALESCE('Correspondance avec ' || v_username, 'Canal privé'),
              v_docte_id,
              v_joueur_id,
              NOW()
            )
            RETURNING id INTO v_channel_id;
          END;
        END IF;

        -- Message Télégraphe
        INSERT INTO public.chat_messages (channel_id, user_id, message, is_admin)
        VALUES (
          v_channel_id,
          v_docte_id,
          '🌑 Une Conséquence de l''Ombre vient d''être révélée'
            || CASE WHEN v_titre_chronique IS NOT NULL THEN ' pour la session « ' || v_titre_chronique || ' »' ELSE '' END
            || '. Consultez vos Chroniques d''Héritage pour en lire le détail.',
          false
        );

        UPDATE public.chat_channels SET last_message_at = NOW() WHERE id = v_channel_id;

        RETURN jsonb_build_object('success', true, 'channel_id', v_channel_id);
      END;
      $$;


--
-- Name: toggle_item_seal(text, uuid, boolean); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.toggle_item_seal(p_table_name text, p_record_id uuid, p_new_status boolean) RETURNS void
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $_$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin', 'gardien')) THEN
          RAISE EXCEPTION 'Accès refusé. Réservé aux Gardiens.';
        END IF;

        IF p_table_name NOT IN ('fairy_types', 'fairy_capacites', 'fairy_powers', 'fairy_assets', 'competences', 'competences_futiles', 'social_items', 'specialites', 'figures') THEN
          RAISE EXCEPTION 'Table % non autorisée pour le scellage', p_table_name;
        END IF;

        EXECUTE format('UPDATE public.%I SET is_sealed = $1 WHERE id = $2', p_table_name)
        USING p_new_status, p_record_id;
      END;
      $_$;


--
-- Name: trigger_set_timestamp(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.trigger_set_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


--
-- Name: update_admin_settings_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_admin_settings_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


--
-- Name: update_notification_prefs_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_notification_prefs_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


--
-- Name: apply_rls(jsonb, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer DEFAULT (1024 * 1024)) RETURNS SETOF realtime.wal_rls
    LANGUAGE plpgsql
    AS $$
declare
    -- Regclass of the table e.g. public.notes
    entity_ regclass = (quote_ident(wal ->> 'schema') || '.' || quote_ident(wal ->> 'table'))::regclass;

    -- I, U, D, T: insert, update ...
    action realtime.action = (
        case wal ->> 'action'
            when 'I' then 'INSERT'
            when 'U' then 'UPDATE'
            when 'D' then 'DELETE'
            else 'ERROR'
        end
    );

    -- Is row level security enabled for the table
    is_rls_enabled bool = relrowsecurity from pg_class where oid = entity_;

    subscriptions realtime.subscription[] = array_agg(subs)
        from
            realtime.subscription subs
        where
            subs.entity = entity_
            -- Filter by action early - only get subscriptions interested in this action
            -- action_filter column can be: '*' (all), 'INSERT', 'UPDATE', or 'DELETE'
            and (subs.action_filter = '*' or subs.action_filter = action::text);

    -- Subscription vars
    working_role regrole;
    working_selected_columns text[];
    claimed_role regrole;
    claims jsonb;

    subscription_id uuid;
    subscription_has_access bool;
    visible_to_subscription_ids uuid[] = '{}';

    -- structured info for wal's columns
    columns realtime.wal_column[];
    -- previous identity values for update/delete
    old_columns realtime.wal_column[];

    error_record_exceeds_max_size boolean = octet_length(wal::text) > max_record_bytes;

    -- Primary jsonb output for record
    output jsonb;

    -- Loop record for iterating unique roles (outer loop)
    role_record record;
    -- Loop record for iterating unique selected_columns within a role (inner loop)
    cols_record record;
    -- Subscription ids visible at the role level (before fanning out by selected_columns)
    visible_role_sub_ids uuid[] = '{}';

begin
    perform set_config('role', null, true);

    columns =
        array_agg(
            (
                x->>'name',
                x->>'type',
                x->>'typeoid',
                realtime.cast(
                    (x->'value') #>> '{}',
                    coalesce(
                        (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                        (x->>'type')::regtype
                    )
                ),
                (pks ->> 'name') is not null,
                true
            )::realtime.wal_column
        )
        from
            jsonb_array_elements(wal -> 'columns') x
            left join jsonb_array_elements(wal -> 'pk') pks
                on (x ->> 'name') = (pks ->> 'name');

    old_columns =
        array_agg(
            (
                x->>'name',
                x->>'type',
                x->>'typeoid',
                realtime.cast(
                    (x->'value') #>> '{}',
                    coalesce(
                        (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4
                        (x->>'type')::regtype
                    )
                ),
                (pks ->> 'name') is not null,
                true
            )::realtime.wal_column
        )
        from
            jsonb_array_elements(wal -> 'identity') x
            left join jsonb_array_elements(wal -> 'pk') pks
                on (x ->> 'name') = (pks ->> 'name');

    for role_record in
        select claims_role
        from (select distinct claims_role from unnest(subscriptions)) t
        order by claims_role::text
    loop
        working_role := role_record.claims_role;

        -- Update `is_selectable` for columns and old_columns (once per role)
        columns =
            array_agg(
                (
                    c.name,
                    c.type_name,
                    c.type_oid,
                    c.value,
                    c.is_pkey,
                    pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
                )::realtime.wal_column
            )
            from
                unnest(columns) c;

        old_columns =
                array_agg(
                    (
                        c.name,
                        c.type_name,
                        c.type_oid,
                        c.value,
                        c.is_pkey,
                        pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')
                    )::realtime.wal_column
                )
                from
                    unnest(old_columns) c;

        if action <> 'DELETE' and count(1) = 0 from unnest(columns) c where c.is_pkey then
            -- Fan out 400 error per distinct selected_columns for this role
            for cols_record in
                select selected_columns
                from (select distinct selected_columns from unnest(subscriptions) s where s.claims_role = working_role) t
                order by coalesce(array_to_string(selected_columns, ','), '')
            loop
                working_selected_columns := cols_record.selected_columns;
                return next (
                    jsonb_build_object(
                        'schema', wal ->> 'schema',
                        'table', wal ->> 'table',
                        'type', action
                    ),
                    is_rls_enabled,
                    (select array_agg(s.subscription_id) from unnest(subscriptions) as s where s.claims_role = working_role and (s.selected_columns is not distinct from working_selected_columns)),
                    array['Error 400: Bad Request, no primary key']
                )::realtime.wal_rls;
            end loop;

        -- The claims role does not have SELECT permission to the primary key of entity
        elsif action <> 'DELETE' and sum(c.is_selectable::int) <> count(1) from unnest(columns) c where c.is_pkey then
            -- Fan out 401 error per distinct selected_columns for this role
            for cols_record in
                select selected_columns
                from (select distinct selected_columns from unnest(subscriptions) s where s.claims_role = working_role) t
                order by coalesce(array_to_string(selected_columns, ','), '')
            loop
                working_selected_columns := cols_record.selected_columns;
                return next (
                    jsonb_build_object(
                        'schema', wal ->> 'schema',
                        'table', wal ->> 'table',
                        'type', action
                    ),
                    is_rls_enabled,
                    (select array_agg(s.subscription_id) from unnest(subscriptions) as s where s.claims_role = working_role and (s.selected_columns is not distinct from working_selected_columns)),
                    array['Error 401: Unauthorized']
                )::realtime.wal_rls;
            end loop;

        else
            -- Create the prepared statement (once per role)
            if is_rls_enabled and action <> 'DELETE' then
                if (select 1 from pg_prepared_statements where name = 'walrus_rls_stmt' limit 1) > 0 then
                    deallocate walrus_rls_stmt;
                end if;
                execute realtime.build_prepared_statement_sql('walrus_rls_stmt', entity_, columns);
            end if;

            -- Collect all visible subscription IDs for this role (filter check + RLS check)
            visible_role_sub_ids = '{}';

            for subscription_id, claims in (
                    select
                        subs.subscription_id,
                        subs.claims
                    from
                        unnest(subscriptions) subs
                    where
                        subs.entity = entity_
                        and subs.claims_role = working_role
                        and (
                            realtime.is_visible_through_filters(columns, subs.filters)
                            or (
                              action = 'DELETE'
                              and realtime.is_visible_through_filters(old_columns, subs.filters)
                            )
                        )
            ) loop

                if not is_rls_enabled or action = 'DELETE' then
                    visible_role_sub_ids = visible_role_sub_ids || subscription_id;
                else
                    -- Check if RLS allows the role to see the record
                    perform
                        -- Trim leading and trailing quotes from working_role because set_config
                        -- doesn't recognize the role as valid if they are included
                        set_config('role', trim(both '"' from working_role::text), true),
                        set_config('request.jwt.claims', claims::text, true);

                    execute 'execute walrus_rls_stmt' into subscription_has_access;

                    if subscription_has_access then
                        visible_role_sub_ids = visible_role_sub_ids || subscription_id;
                    end if;
                end if;
            end loop;

            perform set_config('role', null, true);

            -- Inner loop: per distinct selected_columns for this role
            for cols_record in
                select selected_columns
                from (select distinct selected_columns from unnest(subscriptions) s where s.claims_role = working_role) t
                order by coalesce(array_to_string(selected_columns, ','), '')
            loop
                working_selected_columns := cols_record.selected_columns;

                output = jsonb_build_object(
                    'schema', wal ->> 'schema',
                    'table', wal ->> 'table',
                    'type', action,
                    'commit_timestamp', to_char(
                        ((wal ->> 'timestamp')::timestamptz at time zone 'utc'),
                        'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'
                    ),
                    'columns', (
                        select
                            jsonb_agg(
                                jsonb_build_object(
                                    'name', pa.attname,
                                    'type', pt.typname
                                )
                                order by pa.attnum asc
                            )
                        from
                            pg_attribute pa
                            join pg_type pt
                                on pa.atttypid = pt.oid
                            left join (
                                select unnest(conkey) as pkey_attnum
                                from pg_constraint
                                where conrelid = entity_ and contype = 'p'
                            ) pk on pk.pkey_attnum = pa.attnum
                        where
                            attrelid = entity_
                            and attnum > 0
                            and pg_catalog.has_column_privilege(working_role, entity_, pa.attname, 'SELECT')
                            and (working_selected_columns is null or pa.attname = any(working_selected_columns) or pk.pkey_attnum is not null)
                    )
                )
                -- Add "record" key for insert and update
                || case
                    when action in ('INSERT', 'UPDATE') then
                        jsonb_build_object(
                            'record',
                            (
                                select
                                    jsonb_object_agg(
                                        -- if unchanged toast, get column name and value from old record
                                        coalesce((c).name, (oc).name),
                                        case
                                            when (c).name is null then (oc).value
                                            else (c).value
                                        end
                                    )
                                from
                                    unnest(columns) c
                                    full outer join unnest(old_columns) oc
                                        on (c).name = (oc).name
                                where
                                    coalesce((c).is_selectable, (oc).is_selectable)
                                    and (working_selected_columns is null or coalesce((c).name, (oc).name) = any(working_selected_columns) or coalesce((c).is_pkey, (oc).is_pkey))
                                    and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                            )
                        )
                    else '{}'::jsonb
                end
                -- Add "old_record" key for update and delete
                || case
                    when action = 'UPDATE' then
                        jsonb_build_object(
                                'old_record',
                                (
                                    select jsonb_object_agg((c).name, (c).value)
                                    from unnest(old_columns) c
                                    where
                                        (c).is_selectable
                                        and (working_selected_columns is null or (c).name = any(working_selected_columns) or (c).is_pkey)
                                        and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                                )
                            )
                    when action = 'DELETE' then
                        jsonb_build_object(
                            'old_record',
                            (
                                select jsonb_object_agg((c).name, (c).value)
                                from unnest(old_columns) c
                                where
                                    (c).is_selectable
                                    and (working_selected_columns is null or (c).name = any(working_selected_columns) or (c).is_pkey)
                                    and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))
                                    and ( not is_rls_enabled or (c).is_pkey ) -- if RLS enabled, we can't secure deletes so filter to pkey
                            )
                        )
                    else '{}'::jsonb
                end;

                -- Filter visible_role_sub_ids to those matching the current selected_columns group
                visible_to_subscription_ids = coalesce(
                    (
                        select array_agg(s.subscription_id)
                        from unnest(subscriptions) s
                        where s.claims_role = working_role
                          and (s.selected_columns is not distinct from working_selected_columns)
                          and s.subscription_id = any(visible_role_sub_ids)
                    ),
                    '{}'::uuid[]
                );

                return next (
                    output,
                    is_rls_enabled,
                    visible_to_subscription_ids,
                    case
                        when error_record_exceeds_max_size then array['Error 413: Payload Too Large']
                        else '{}'
                    end
                )::realtime.wal_rls;
            end loop;

        end if;
    end loop;

    perform set_config('role', null, true);
end;
$$;


--
-- Name: broadcast_changes(text, text, text, text, text, record, record, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text DEFAULT 'ROW'::text) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
    -- Declare a variable to hold the JSONB representation of the row
    row_data jsonb := '{}'::jsonb;
BEGIN
    IF level = 'STATEMENT' THEN
        RAISE EXCEPTION 'function can only be triggered for each row, not for each statement';
    END IF;
    -- Check the operation type and handle accordingly
    IF operation = 'INSERT' OR operation = 'UPDATE' OR operation = 'DELETE' THEN
        row_data := jsonb_build_object('old_record', OLD, 'record', NEW, 'operation', operation, 'table', table_name, 'schema', table_schema);
        PERFORM realtime.send (row_data, event_name, topic_name);
    ELSE
        RAISE EXCEPTION 'Unexpected operation type: %', operation;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Failed to process the row: %', SQLERRM;
END;

$$;


--
-- Name: build_prepared_statement_sql(text, regclass, realtime.wal_column[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[]) RETURNS text
    LANGUAGE sql
    AS $$
      /*
      Builds a sql string that, if executed, creates a prepared statement to
      tests retrive a row from *entity* by its primary key columns.
      Example
          select realtime.build_prepared_statement_sql('public.notes', '{"id"}'::text[], '{"bigint"}'::text[])
      */
          select
      'prepare ' || prepared_statement_name || ' as
          select
              exists(
                  select
                      1
                  from
                      ' || entity || '
                  where
                      ' || string_agg(quote_ident(pkc.name) || '=' || quote_nullable(pkc.value #>> '{}') , ' and ') || '
              )'
          from
              unnest(columns) pkc
          where
              pkc.is_pkey
          group by
              entity
      $$;


--
-- Name: cast(text, regtype); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime."cast"(val text, type_ regtype) RETURNS jsonb
    LANGUAGE plpgsql IMMUTABLE
    AS $$
declare
  res jsonb;
begin
  if type_::text = 'bytea' then
    return to_jsonb(val);
  end if;
  execute format('select to_jsonb(%L::'|| type_::text || ')', val) into res;
  return res;
end
$$;


--
-- Name: check_equality_op(realtime.equality_op, regtype, text, text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text) RETURNS boolean
    LANGUAGE plpgsql IMMUTABLE
    AS $$
/*
Casts *val_1* and *val_2* as type *type_* and check the *op* condition for truthiness
*/
declare
    op_symbol text = (
        case
            when op = 'eq' then '='
            when op = 'neq' then '!='
            when op = 'lt' then '<'
            when op = 'lte' then '<='
            when op = 'gt' then '>'
            when op = 'gte' then '>='
            when op = 'in' then '= any'
            else 'UNKNOWN OP'
        end
    );
    res boolean;
begin
    execute format(
        'select %L::'|| type_::text || ' ' || op_symbol
        || ' ( %L::'
        || (
            case
                when op = 'in' then type_::text || '[]'
                else type_::text end
        )
        || ')', val_1, val_2) into res;
    return res;
end;
$$;


--
-- Name: check_equality_op(realtime.equality_op, regtype, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text, negate boolean) RETURNS boolean
    LANGUAGE plpgsql STABLE
    AS $$
declare
    op_symbol text;
    res boolean;
begin
    -- IS DISTINCT FROM / IS NOT DISTINCT FROM: infix, both sides typed literals
    if op = 'isdistinct' then
        execute format(
            'select %L::%s %s %L::%s',
            val_1,
            type_::text,
            case when negate then 'IS NOT DISTINCT FROM' else 'IS DISTINCT FROM' end,
            val_2,
            type_::text
        ) into res;
        return res;
    end if;

    -- IS requires a keyword RHS (NULL, TRUE, FALSE, UNKNOWN), not a typed literal
    if op = 'is' then
        if val_2 not in ('null', 'true', 'false', 'unknown') then
            raise exception 'invalid value for is filter: must be null, true, false, or unknown';
        end if;
        execute format(
            'select %L::%s %s %s',
            val_1,
            type_::text,
            case when negate then 'IS NOT' else 'IS' end,
            upper(val_2)
        ) into res;
        return res;
    end if;

    op_symbol = case
        when op = 'eq'    then '='
        when op = 'neq'   then '!='
        when op = 'lt'    then '<'
        when op = 'lte'   then '<='
        when op = 'gt'    then '>'
        when op = 'gte'   then '>='
        when op = 'in'    then '= any'
        when op = 'like'   then 'LIKE'
        when op = 'ilike'  then 'ILIKE'
        when op = 'match'  then '~'
        when op = 'imatch' then '~*'
        else null
    end;

    if op_symbol is null then
        raise exception 'unsupported equality operator: %', op::text;
    end if;

    execute format(
        'select %L::%s %s (%L::%s)',
        val_1,
        type_::text,
        op_symbol,
        val_2,
        case when op = 'in' then type_::text || '[]' else type_::text end
    ) into res;

    return case when negate then not res else res end;
end;
$$;


--
-- Name: is_visible_through_filters(realtime.wal_column[], realtime.user_defined_filter[]); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[]) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
    select
        filters is null
        or array_length(filters, 1) is null
        or coalesce(
            count(col.name) = count(1)
            and sum(
                realtime.check_equality_op(
                    op:=f.op,
                    type_:=coalesce(col.type_oid::regtype, col.type_name::regtype),
                    val_1:=col.value #>> '{}',
                    val_2:=f.value,
                    negate:=coalesce(f.negate, false)
                )::int
            ) filter (where col.name is not null) = count(col.name),
            false
        )
    from
        unnest(filters) f
        left join unnest(columns) col
            on f.column_name = col.name;
$$;


--
-- Name: list_changes(name, name, integer, integer); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer) RETURNS TABLE(wal jsonb, is_rls_enabled boolean, subscription_ids uuid[], errors text[], slot_changes_count bigint)
    LANGUAGE sql
    SET log_min_messages TO 'fatal'
    AS $$
  WITH pub AS (
    SELECT
      concat_ws(
        ',',
        CASE WHEN bool_or(pubinsert) THEN 'insert' ELSE NULL END,
        CASE WHEN bool_or(pubupdate) THEN 'update' ELSE NULL END,
        CASE WHEN bool_or(pubdelete) THEN 'delete' ELSE NULL END
      ) AS w2j_actions,
      coalesce(
        string_agg(
          realtime.quote_wal2json(format('%I.%I', schemaname, tablename)::regclass),
          ','
        ) filter (WHERE ppt.tablename IS NOT NULL),
        ''
      ) AS w2j_add_tables
    FROM pg_publication pp
    LEFT JOIN pg_publication_tables ppt ON pp.pubname = ppt.pubname
    WHERE pp.pubname = publication
    GROUP BY pp.pubname
    LIMIT 1
  ),
  -- MATERIALIZED ensures pg_logical_slot_get_changes is called exactly once
  w2j AS MATERIALIZED (
    SELECT x.*, pub.w2j_add_tables
    FROM pub,
         pg_logical_slot_get_changes(
           slot_name, null, max_changes,
           'include-pk', 'true',
           'include-transaction', 'false',
           'include-timestamp', 'true',
           'include-type-oids', 'true',
           'format-version', '2',
           'actions', pub.w2j_actions,
           'add-tables', pub.w2j_add_tables
         ) x
  ),
  slot_count AS (
    SELECT count(*)::bigint AS cnt
    FROM w2j
    WHERE w2j.w2j_add_tables <> ''
  ),
  rls_filtered AS (
    SELECT xyz.wal, xyz.is_rls_enabled, xyz.subscription_ids, xyz.errors
    FROM w2j,
         realtime.apply_rls(
           wal := w2j.data::jsonb,
           max_record_bytes := max_record_bytes
         ) xyz(wal, is_rls_enabled, subscription_ids, errors)
    WHERE w2j.w2j_add_tables <> ''
      AND xyz.subscription_ids[1] IS NOT NULL
  )
  SELECT rf.wal, rf.is_rls_enabled, rf.subscription_ids, rf.errors, sc.cnt
  FROM rls_filtered rf, slot_count sc

  UNION ALL

  SELECT null, null, null, null, sc.cnt
  FROM slot_count sc
  WHERE NOT EXISTS (SELECT 1 FROM rls_filtered)
$$;


--
-- Name: quote_wal2json(regclass); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.quote_wal2json(entity regclass) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  SELECT
    realtime.wal2json_escape_identifier(nsp.nspname::text)
    || '.'
    || realtime.wal2json_escape_identifier(pc.relname::text)
  FROM pg_class pc
  JOIN pg_namespace nsp ON pc.relnamespace = nsp.oid
  WHERE pc.oid = entity
$$;


--
-- Name: send(jsonb, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean DEFAULT true) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  generated_id uuid;
  final_payload jsonb;
BEGIN
  BEGIN
    generated_id := gen_random_uuid();

    -- Check if payload has an 'id' key, if not, add the generated UUID
    IF payload ? 'id' THEN
      final_payload := payload;
    ELSE
      final_payload := jsonb_set(payload, '{id}', to_jsonb(generated_id));
    END IF;

    -- Set the topic configuration
    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);

    INSERT INTO realtime.messages (id, payload, event, topic, private, extension)
    VALUES (generated_id, final_payload, event, topic, private, 'broadcast');
  EXCEPTION
    WHEN OTHERS THEN
      RAISE WARNING 'WarnSendingBroadcastMessage: %', SQLERRM;
  END;
END;
$$;


--
-- Name: send_binary(bytea, text, text, boolean); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.send_binary(payload bytea, event text, topic text, private boolean DEFAULT true) RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  generated_id uuid;
BEGIN
  BEGIN
    generated_id := gen_random_uuid();

    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);

    INSERT INTO realtime.messages (id, binary_payload, event, topic, private, extension)
    VALUES (generated_id, payload, event, topic, private, 'broadcast');
  EXCEPTION
    WHEN OTHERS THEN
      RAISE WARNING 'WarnSendingBroadcastMessage: %', SQLERRM;
  END;
END;
$$;


--
-- Name: subscription_check_filters(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.subscription_check_filters() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
    col_names text[] = coalesce(
            array_agg(a.attname order by a.attnum),
            '{}'::text[]
        )
        from
            pg_catalog.pg_attribute a
        where
            a.attrelid = new.entity
            and a.attnum > 0
            and not a.attisdropped
            and pg_catalog.has_column_privilege(
                (new.claims ->> 'role'),
                a.attrelid,
                a.attnum,
                'SELECT'
            );
    filter realtime.user_defined_filter;
    col_type regtype;
    in_val jsonb;
    selected_col text;
begin
    for filter in select * from unnest(new.filters) loop
        if not filter.column_name = any(col_names) then
            raise exception 'invalid column for filter %', filter.column_name;
        end if;

        col_type = (
            select atttypid::regtype
            from pg_catalog.pg_attribute
            where attrelid = new.entity
                  and attname = filter.column_name
        );
        if col_type is null then
            raise exception 'failed to lookup type for column %', filter.column_name;
        end if;

        if filter.op = 'in'::realtime.equality_op then
            in_val = realtime.cast(filter.value, (col_type::text || '[]')::regtype);
            if coalesce(jsonb_array_length(in_val), 0) > 100 then
                raise exception 'too many values for `in` filter. Maximum 100';
            end if;
        elsif filter.op = 'is'::realtime.equality_op then
            -- `is` requires a keyword RHS rather than a typed literal
            if filter.value not in ('null', 'true', 'false', 'unknown') then
                raise exception 'invalid value for is filter: must be null, true, false, or unknown';
            end if;
            -- IS NULL works for any type, but IS TRUE/FALSE/UNKNOWN require a boolean
            -- operand. Reject the non-null keywords on non-boolean columns here so they
            -- don't abort apply_rls at WAL time.
            if filter.value <> 'null' and col_type <> 'boolean'::regtype then
                raise exception 'is % filter requires a boolean column, got %', filter.value, col_type::text;
            end if;
        elsif filter.op in ('like'::realtime.equality_op, 'ilike'::realtime.equality_op) then
            -- like/ilike apply the text pattern operator (~~); reject column types that
            -- have no such operator instead of failing at WAL time
            if not exists (
                select 1 from pg_catalog.pg_operator
                where oprname = '~~' and oprleft = col_type
            ) then
                raise exception 'operator % requires a text-compatible column type, got %', filter.op::text, col_type::text;
            end if;
        elsif filter.op in ('match'::realtime.equality_op, 'imatch'::realtime.equality_op) then
            -- match/imatch apply the regex operators ~ / ~*; reject column types that have
            -- no such operator (e.g. integer) instead of failing at WAL time, mirroring the
            -- like/ilike guard above.
            if not exists (
                select 1 from pg_catalog.pg_operator
                where oprname = case when filter.op = 'imatch'::realtime.equality_op then '~*' else '~' end
                  and oprleft = col_type
                  and oprright = col_type
                  and oprresult = 'boolean'::regtype
            ) then
                raise exception 'operator % requires a text-compatible column type, got %', filter.op::text, col_type::text;
            end if;
            -- validate the regex eagerly so a bad pattern is rejected here, not inside
            -- apply_rls where it would abort the WAL stream for the entity
            begin
                perform '' ~ filter.value;
            exception when others then
                raise exception 'invalid regular expression for % filter: %', filter.op::text, sqlerrm;
            end;
        else
            -- eq/neq/lt/lte/gt/gte: value must be coercable to the type
            perform realtime.cast(filter.value, col_type);
        end if;
    end loop;

    if new.selected_columns is not null then
        for selected_col in select * from unnest(new.selected_columns) loop
            if not selected_col = any(col_names) then
                raise exception 'invalid column for select %', selected_col;
            end if;
        end loop;
    end if;

    -- Apply consistent order to filters so the unique constraint can't be tricked by a
    -- different filter order. negate is part of the sort key.
    new.filters = coalesce(
        array_agg(f order by f.column_name, f.op, f.value, f.negate),
        '{}'
    ) from unnest(new.filters) f;

    new.selected_columns = (
        select array_agg(c order by c)
        from unnest(new.selected_columns) c
    );

    return new;
end;
$$;


--
-- Name: to_regrole(text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.to_regrole(role_name text) RETURNS regrole
    LANGUAGE sql IMMUTABLE
    AS $$ select role_name::regrole $$;


--
-- Name: topic(); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.topic() RETURNS text
    LANGUAGE sql STABLE
    AS $$
select nullif(current_setting('realtime.topic', true), '')::text;
$$;


--
-- Name: wal2json_escape_identifier(text); Type: FUNCTION; Schema: realtime; Owner: -
--

CREATE FUNCTION realtime.wal2json_escape_identifier(name text) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  -- Prefix `\`, `,`, `.`, and any whitespace with `\`
  SELECT regexp_replace(name, '([\\,.[:space:]])', '\\\1', 'g')
$$;


--
-- Name: allow_any_operation(text[]); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.allow_any_operation(expected_operations text[]) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
  WITH current_operation AS (
    SELECT storage.operation() AS raw_operation
  ),
  normalized AS (
    SELECT CASE
      WHEN raw_operation LIKE 'storage.%' THEN substr(raw_operation, 9)
      ELSE raw_operation
    END AS current_operation
    FROM current_operation
  )
  SELECT EXISTS (
    SELECT 1
    FROM normalized n
    CROSS JOIN LATERAL unnest(expected_operations) AS expected_operation
    WHERE expected_operation IS NOT NULL
      AND expected_operation <> ''
      AND n.current_operation = CASE
        WHEN expected_operation LIKE 'storage.%' THEN substr(expected_operation, 9)
        ELSE expected_operation
      END
  );
$$;


--
-- Name: allow_only_operation(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.allow_only_operation(expected_operation text) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
  WITH current_operation AS (
    SELECT storage.operation() AS raw_operation
  ),
  normalized AS (
    SELECT
      CASE
        WHEN raw_operation LIKE 'storage.%' THEN substr(raw_operation, 9)
        ELSE raw_operation
      END AS current_operation,
      CASE
        WHEN expected_operation LIKE 'storage.%' THEN substr(expected_operation, 9)
        ELSE expected_operation
      END AS requested_operation
    FROM current_operation
  )
  SELECT CASE
    WHEN requested_operation IS NULL OR requested_operation = '' THEN FALSE
    ELSE COALESCE(current_operation = requested_operation, FALSE)
  END
  FROM normalized;
$$;


--
-- Name: can_insert_object(text, text, uuid, jsonb); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO "storage"."objects" ("bucket_id", "name", "owner", "metadata") VALUES (bucketid, name, owner, metadata);
  -- hack to rollback the successful insert
  RAISE sqlstate 'PT200' using
  message = 'ROLLBACK',
  detail = 'rollback successful insert';
END
$$;


--
-- Name: enforce_bucket_name_length(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.enforce_bucket_name_length() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
    if length(new.name) > 100 then
        raise exception 'bucket name "%" is too long (% characters). Max is 100.', new.name, length(new.name);
    end if;
    return new;
end;
$$;


--
-- Name: extension(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.extension(name text) RETURNS text
    LANGUAGE plpgsql IMMUTABLE
    AS $$
DECLARE
    _parts text[];
    _filename text;
BEGIN
    -- Split on "/" to get path segments
    SELECT string_to_array(name, '/') INTO _parts;
    -- Get the last path segment (the actual filename)
    SELECT _parts[array_length(_parts, 1)] INTO _filename;
    -- Extract extension: reverse, split on '.', then reverse again
    RETURN reverse(split_part(reverse(_filename), '.', 1));
END
$$;


--
-- Name: filename(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.filename(name text) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[array_length(_parts,1)];
END
$$;


--
-- Name: foldername(text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.foldername(name text) RETURNS text[]
    LANGUAGE plpgsql IMMUTABLE
    AS $$
DECLARE
    _parts text[];
BEGIN
    -- Split on "/" to get path segments
    SELECT string_to_array(name, '/') INTO _parts;
    -- Return everything except the last segment
    RETURN _parts[1 : array_length(_parts,1) - 1];
END
$$;


--
-- Name: get_common_prefix(text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_common_prefix(p_key text, p_prefix text, p_delimiter text) RETURNS text
    LANGUAGE sql IMMUTABLE
    AS $$
SELECT CASE
    WHEN position(p_delimiter IN substring(p_key FROM length(p_prefix) + 1)) > 0
    THEN left(p_key, length(p_prefix) + position(p_delimiter IN substring(p_key FROM length(p_prefix) + 1)))
    ELSE NULL
END;
$$;


--
-- Name: get_size_by_bucket(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.get_size_by_bucket() RETURNS TABLE(size bigint, bucket_id text)
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    return query
        select sum((metadata->>'size')::bigint)::bigint as size, obj.bucket_id
        from "storage".objects as obj
        group by obj.bucket_id;
END
$$;


--
-- Name: list_multipart_uploads_with_delimiter(text, text, text, integer, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, next_key_token text DEFAULT ''::text, next_upload_token text DEFAULT ''::text) RETURNS TABLE(key text, id text, created_at timestamp with time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
    RETURN QUERY EXECUTE
        'SELECT DISTINCT ON(key COLLATE "C") * from (
            SELECT
                CASE
                    WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                        substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1)))
                    ELSE
                        key
                END AS key, id, created_at
            FROM
                storage.s3_multipart_uploads
            WHERE
                bucket_id = $5 AND
                key ILIKE $1 || ''%'' AND
                CASE
                    WHEN $4 != '''' AND $6 = '''' THEN
                        CASE
                            WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN
                                substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1))) COLLATE "C" > $4
                            ELSE
                                key COLLATE "C" > $4
                            END
                    ELSE
                        true
                END AND
                CASE
                    WHEN $6 != '''' THEN
                        id COLLATE "C" > $6
                    ELSE
                        true
                    END
            ORDER BY
                key COLLATE "C" ASC, created_at ASC) as e order by key COLLATE "C" LIMIT $3'
        USING prefix_param, delimiter_param, max_keys, next_key_token, bucket_id, next_upload_token;
END;
$_$;


--
-- Name: list_objects_with_delimiter(text, text, text, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.list_objects_with_delimiter(_bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, start_after text DEFAULT ''::text, next_token text DEFAULT ''::text, sort_order text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, metadata jsonb, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone)
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE
    v_peek_name TEXT;
    v_current RECORD;
    v_common_prefix TEXT;

    -- Configuration
    v_is_asc BOOLEAN;
    v_prefix TEXT;
    v_start TEXT;
    v_upper_bound TEXT;
    v_file_batch_size INT;

    -- Seek state
    v_next_seek TEXT;
    v_count INT := 0;

    -- Dynamic SQL for batch query only
    v_batch_query TEXT;

BEGIN
    -- ========================================================================
    -- INITIALIZATION
    -- ========================================================================
    v_is_asc := lower(coalesce(sort_order, 'asc')) = 'asc';
    v_prefix := coalesce(prefix_param, '');
    v_start := CASE WHEN coalesce(next_token, '') <> '' THEN next_token ELSE coalesce(start_after, '') END;
    v_file_batch_size := LEAST(GREATEST(max_keys * 2, 100), 1000);

    -- Calculate upper bound for prefix filtering (bytewise, using COLLATE "C")
    IF v_prefix = '' THEN
        v_upper_bound := NULL;
    ELSIF right(v_prefix, 1) = delimiter_param THEN
        v_upper_bound := left(v_prefix, -1) || chr(ascii(delimiter_param) + 1);
    ELSE
        v_upper_bound := left(v_prefix, -1) || chr(ascii(right(v_prefix, 1)) + 1);
    END IF;

    -- Build batch query (dynamic SQL - called infrequently, amortized over many rows)
    IF v_is_asc THEN
        IF v_upper_bound IS NOT NULL THEN
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND o.name COLLATE "C" >= $2 ' ||
                'AND o.name COLLATE "C" < $3 ORDER BY o.name COLLATE "C" ASC LIMIT $4';
        ELSE
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND o.name COLLATE "C" >= $2 ' ||
                'ORDER BY o.name COLLATE "C" ASC LIMIT $4';
        END IF;
    ELSE
        IF v_upper_bound IS NOT NULL THEN
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND o.name COLLATE "C" < $2 ' ||
                'AND o.name COLLATE "C" >= $3 ORDER BY o.name COLLATE "C" DESC LIMIT $4';
        ELSE
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND o.name COLLATE "C" < $2 ' ||
                'ORDER BY o.name COLLATE "C" DESC LIMIT $4';
        END IF;
    END IF;

    -- ========================================================================
    -- SEEK INITIALIZATION: Determine starting position
    -- ========================================================================
    IF v_start = '' THEN
        IF v_is_asc THEN
            v_next_seek := v_prefix;
        ELSE
            -- DESC without cursor: find the last item in range
            IF v_upper_bound IS NOT NULL THEN
                SELECT o.name INTO v_next_seek FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" >= v_prefix AND o.name COLLATE "C" < v_upper_bound
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            ELSIF v_prefix <> '' THEN
                SELECT o.name INTO v_next_seek FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" >= v_prefix
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            ELSE
                SELECT o.name INTO v_next_seek FROM storage.objects o
                WHERE o.bucket_id = _bucket_id
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            END IF;

            IF v_next_seek IS NOT NULL THEN
                v_next_seek := v_next_seek || delimiter_param;
            ELSE
                RETURN;
            END IF;
        END IF;
    ELSE
        -- Cursor provided: determine if it refers to a folder or leaf
        IF EXISTS (
            SELECT 1 FROM storage.objects o
            WHERE o.bucket_id = _bucket_id
              AND o.name COLLATE "C" LIKE v_start || delimiter_param || '%'
            LIMIT 1
        ) THEN
            -- Cursor refers to a folder
            IF v_is_asc THEN
                v_next_seek := v_start || chr(ascii(delimiter_param) + 1);
            ELSE
                v_next_seek := v_start || delimiter_param;
            END IF;
        ELSE
            -- Cursor refers to a leaf object
            IF v_is_asc THEN
                v_next_seek := v_start || delimiter_param;
            ELSE
                v_next_seek := v_start;
            END IF;
        END IF;
    END IF;

    -- ========================================================================
    -- MAIN LOOP: Hybrid peek-then-batch algorithm
    -- Uses STATIC SQL for peek (hot path) and DYNAMIC SQL for batch
    -- ========================================================================
    LOOP
        EXIT WHEN v_count >= max_keys;

        -- STEP 1: PEEK using STATIC SQL (plan cached, very fast)
        IF v_is_asc THEN
            IF v_upper_bound IS NOT NULL THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" >= v_next_seek AND o.name COLLATE "C" < v_upper_bound
                ORDER BY o.name COLLATE "C" ASC LIMIT 1;
            ELSE
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" >= v_next_seek
                ORDER BY o.name COLLATE "C" ASC LIMIT 1;
            END IF;
        ELSE
            IF v_upper_bound IS NOT NULL THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" < v_next_seek AND o.name COLLATE "C" >= v_prefix
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            ELSIF v_prefix <> '' THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" < v_next_seek AND o.name COLLATE "C" >= v_prefix
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            ELSE
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = _bucket_id AND o.name COLLATE "C" < v_next_seek
                ORDER BY o.name COLLATE "C" DESC LIMIT 1;
            END IF;
        END IF;

        EXIT WHEN v_peek_name IS NULL;

        -- STEP 2: Check if this is a FOLDER or FILE
        v_common_prefix := storage.get_common_prefix(v_peek_name, v_prefix, delimiter_param);

        IF v_common_prefix IS NOT NULL THEN
            -- FOLDER: Emit and skip to next folder (no heap access needed)
            name := rtrim(v_common_prefix, delimiter_param);
            id := NULL;
            updated_at := NULL;
            created_at := NULL;
            last_accessed_at := NULL;
            metadata := NULL;
            RETURN NEXT;
            v_count := v_count + 1;

            -- Advance seek past the folder range
            IF v_is_asc THEN
                v_next_seek := left(v_common_prefix, -1) || chr(ascii(delimiter_param) + 1);
            ELSE
                v_next_seek := v_common_prefix;
            END IF;
        ELSE
            -- FILE: Batch fetch using DYNAMIC SQL (overhead amortized over many rows)
            -- For ASC: upper_bound is the exclusive upper limit (< condition)
            -- For DESC: prefix is the inclusive lower limit (>= condition)
            FOR v_current IN EXECUTE v_batch_query USING _bucket_id, v_next_seek,
                CASE WHEN v_is_asc THEN COALESCE(v_upper_bound, v_prefix) ELSE v_prefix END, v_file_batch_size
            LOOP
                v_common_prefix := storage.get_common_prefix(v_current.name, v_prefix, delimiter_param);

                IF v_common_prefix IS NOT NULL THEN
                    -- Hit a folder: exit batch, let peek handle it
                    v_next_seek := v_current.name;
                    EXIT;
                END IF;

                -- Emit file
                name := v_current.name;
                id := v_current.id;
                updated_at := v_current.updated_at;
                created_at := v_current.created_at;
                last_accessed_at := v_current.last_accessed_at;
                metadata := v_current.metadata;
                RETURN NEXT;
                v_count := v_count + 1;

                -- Advance seek past this file
                IF v_is_asc THEN
                    v_next_seek := v_current.name || delimiter_param;
                ELSE
                    v_next_seek := v_current.name;
                END IF;

                EXIT WHEN v_count >= max_keys;
            END LOOP;
        END IF;
    END LOOP;
END;
$_$;


--
-- Name: operation(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.operation() RETURNS text
    LANGUAGE plpgsql STABLE
    AS $$
BEGIN
    RETURN current_setting('storage.operation', true);
END;
$$;


--
-- Name: protect_delete(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.protect_delete() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Check if storage.allow_delete_query is set to 'true'
    IF COALESCE(current_setting('storage.allow_delete_query', true), 'false') != 'true' THEN
        RAISE EXCEPTION 'Direct deletion from storage tables is not allowed. Use the Storage API instead.'
            USING HINT = 'This prevents accidental data loss from orphaned objects.',
                  ERRCODE = '42501';
    END IF;
    RETURN NULL;
END;
$$;


--
-- Name: search(text, text, integer, integer, integer, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text) RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE
    v_peek_name TEXT;
    v_current RECORD;
    v_common_prefix TEXT;
    v_delimiter CONSTANT TEXT := '/';

    -- Configuration
    v_limit INT;
    v_prefix TEXT;
    v_prefix_lower TEXT;
    v_is_asc BOOLEAN;
    v_order_by TEXT;
    v_sort_order TEXT;
    v_upper_bound TEXT;
    v_file_batch_size INT;

    -- Dynamic SQL for batch query only
    v_batch_query TEXT;

    -- Seek state
    v_next_seek TEXT;
    v_count INT := 0;
    v_skipped INT := 0;
BEGIN
    -- ========================================================================
    -- INITIALIZATION
    -- ========================================================================
    v_limit := LEAST(coalesce(limits, 100), 1500);
    v_prefix := coalesce(prefix, '') || coalesce(search, '');
    v_prefix_lower := lower(v_prefix);
    v_is_asc := lower(coalesce(sortorder, 'asc')) = 'asc';
    v_file_batch_size := LEAST(GREATEST(v_limit * 2, 100), 1000);

    -- Validate sort column
    CASE lower(coalesce(sortcolumn, 'name'))
        WHEN 'name' THEN v_order_by := 'name';
        WHEN 'updated_at' THEN v_order_by := 'updated_at';
        WHEN 'created_at' THEN v_order_by := 'created_at';
        WHEN 'last_accessed_at' THEN v_order_by := 'last_accessed_at';
        ELSE v_order_by := 'name';
    END CASE;

    v_sort_order := CASE WHEN v_is_asc THEN 'asc' ELSE 'desc' END;

    -- ========================================================================
    -- NON-NAME SORTING: Use path_tokens approach (unchanged)
    -- ========================================================================
    IF v_order_by != 'name' THEN
        RETURN QUERY EXECUTE format(
            $sql$
            WITH folders AS (
                SELECT path_tokens[$1] AS folder
                FROM storage.objects
                WHERE objects.name ILIKE $2 || '%%'
                  AND bucket_id = $3
                  AND array_length(objects.path_tokens, 1) <> $1
                GROUP BY folder
                ORDER BY folder %s
            )
            (SELECT folder AS "name",
                   NULL::uuid AS id,
                   NULL::timestamptz AS updated_at,
                   NULL::timestamptz AS created_at,
                   NULL::timestamptz AS last_accessed_at,
                   NULL::jsonb AS metadata FROM folders)
            UNION ALL
            (SELECT path_tokens[$1] AS "name",
                   id, updated_at, created_at, last_accessed_at, metadata
             FROM storage.objects
             WHERE objects.name ILIKE $2 || '%%'
               AND bucket_id = $3
               AND array_length(objects.path_tokens, 1) = $1
             ORDER BY %I %s)
            LIMIT $4 OFFSET $5
            $sql$, v_sort_order, v_order_by, v_sort_order
        ) USING levels, v_prefix, bucketname, v_limit, offsets;
        RETURN;
    END IF;

    -- ========================================================================
    -- NAME SORTING: Hybrid skip-scan with batch optimization
    -- ========================================================================

    -- Calculate upper bound for prefix filtering
    IF v_prefix_lower = '' THEN
        v_upper_bound := NULL;
    ELSIF right(v_prefix_lower, 1) = v_delimiter THEN
        v_upper_bound := left(v_prefix_lower, -1) || chr(ascii(v_delimiter) + 1);
    ELSE
        v_upper_bound := left(v_prefix_lower, -1) || chr(ascii(right(v_prefix_lower, 1)) + 1);
    END IF;

    -- Build batch query (dynamic SQL - called infrequently, amortized over many rows)
    IF v_is_asc THEN
        IF v_upper_bound IS NOT NULL THEN
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND lower(o.name) COLLATE "C" >= $2 ' ||
                'AND lower(o.name) COLLATE "C" < $3 ORDER BY lower(o.name) COLLATE "C" ASC LIMIT $4';
        ELSE
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND lower(o.name) COLLATE "C" >= $2 ' ||
                'ORDER BY lower(o.name) COLLATE "C" ASC LIMIT $4';
        END IF;
    ELSE
        IF v_upper_bound IS NOT NULL THEN
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND lower(o.name) COLLATE "C" < $2 ' ||
                'AND lower(o.name) COLLATE "C" >= $3 ORDER BY lower(o.name) COLLATE "C" DESC LIMIT $4';
        ELSE
            v_batch_query := 'SELECT o.name, o.id, o.updated_at, o.created_at, o.last_accessed_at, o.metadata ' ||
                'FROM storage.objects o WHERE o.bucket_id = $1 AND lower(o.name) COLLATE "C" < $2 ' ||
                'ORDER BY lower(o.name) COLLATE "C" DESC LIMIT $4';
        END IF;
    END IF;

    -- Initialize seek position
    IF v_is_asc THEN
        v_next_seek := v_prefix_lower;
    ELSE
        -- DESC: find the last item in range first (static SQL)
        IF v_upper_bound IS NOT NULL THEN
            SELECT o.name INTO v_peek_name FROM storage.objects o
            WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" >= v_prefix_lower AND lower(o.name) COLLATE "C" < v_upper_bound
            ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
        ELSIF v_prefix_lower <> '' THEN
            SELECT o.name INTO v_peek_name FROM storage.objects o
            WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" >= v_prefix_lower
            ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
        ELSE
            SELECT o.name INTO v_peek_name FROM storage.objects o
            WHERE o.bucket_id = bucketname
            ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
        END IF;

        IF v_peek_name IS NOT NULL THEN
            v_next_seek := lower(v_peek_name) || v_delimiter;
        ELSE
            RETURN;
        END IF;
    END IF;

    -- ========================================================================
    -- MAIN LOOP: Hybrid peek-then-batch algorithm
    -- Uses STATIC SQL for peek (hot path) and DYNAMIC SQL for batch
    -- ========================================================================
    LOOP
        EXIT WHEN v_count >= v_limit;

        -- STEP 1: PEEK using STATIC SQL (plan cached, very fast)
        IF v_is_asc THEN
            IF v_upper_bound IS NOT NULL THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" >= v_next_seek AND lower(o.name) COLLATE "C" < v_upper_bound
                ORDER BY lower(o.name) COLLATE "C" ASC LIMIT 1;
            ELSE
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" >= v_next_seek
                ORDER BY lower(o.name) COLLATE "C" ASC LIMIT 1;
            END IF;
        ELSE
            IF v_upper_bound IS NOT NULL THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" < v_next_seek AND lower(o.name) COLLATE "C" >= v_prefix_lower
                ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
            ELSIF v_prefix_lower <> '' THEN
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" < v_next_seek AND lower(o.name) COLLATE "C" >= v_prefix_lower
                ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
            ELSE
                SELECT o.name INTO v_peek_name FROM storage.objects o
                WHERE o.bucket_id = bucketname AND lower(o.name) COLLATE "C" < v_next_seek
                ORDER BY lower(o.name) COLLATE "C" DESC LIMIT 1;
            END IF;
        END IF;

        EXIT WHEN v_peek_name IS NULL;

        -- STEP 2: Check if this is a FOLDER or FILE
        v_common_prefix := storage.get_common_prefix(lower(v_peek_name), v_prefix_lower, v_delimiter);

        IF v_common_prefix IS NOT NULL THEN
            -- FOLDER: Handle offset, emit if needed, skip to next folder
            IF v_skipped < offsets THEN
                v_skipped := v_skipped + 1;
            ELSE
                name := split_part(rtrim(storage.get_common_prefix(v_peek_name, v_prefix, v_delimiter), v_delimiter), v_delimiter, levels);
                id := NULL;
                updated_at := NULL;
                created_at := NULL;
                last_accessed_at := NULL;
                metadata := NULL;
                RETURN NEXT;
                v_count := v_count + 1;
            END IF;

            -- Advance seek past the folder range
            IF v_is_asc THEN
                v_next_seek := lower(left(v_common_prefix, -1)) || chr(ascii(v_delimiter) + 1);
            ELSE
                v_next_seek := lower(v_common_prefix);
            END IF;
        ELSE
            -- FILE: Batch fetch using DYNAMIC SQL (overhead amortized over many rows)
            -- For ASC: upper_bound is the exclusive upper limit (< condition)
            -- For DESC: prefix_lower is the inclusive lower limit (>= condition)
            FOR v_current IN EXECUTE v_batch_query
                USING bucketname, v_next_seek,
                    CASE WHEN v_is_asc THEN COALESCE(v_upper_bound, v_prefix_lower) ELSE v_prefix_lower END, v_file_batch_size
            LOOP
                v_common_prefix := storage.get_common_prefix(lower(v_current.name), v_prefix_lower, v_delimiter);

                IF v_common_prefix IS NOT NULL THEN
                    -- Hit a folder: exit batch, let peek handle it
                    v_next_seek := lower(v_current.name);
                    EXIT;
                END IF;

                -- Handle offset skipping
                IF v_skipped < offsets THEN
                    v_skipped := v_skipped + 1;
                ELSE
                    -- Emit file
                    name := split_part(v_current.name, v_delimiter, levels);
                    id := v_current.id;
                    updated_at := v_current.updated_at;
                    created_at := v_current.created_at;
                    last_accessed_at := v_current.last_accessed_at;
                    metadata := v_current.metadata;
                    RETURN NEXT;
                    v_count := v_count + 1;
                END IF;

                -- Advance seek past this file
                IF v_is_asc THEN
                    v_next_seek := lower(v_current.name) || v_delimiter;
                ELSE
                    v_next_seek := lower(v_current.name);
                END IF;

                EXIT WHEN v_count >= v_limit;
            END LOOP;
        END IF;
    END LOOP;
END;
$_$;


--
-- Name: search_by_timestamp(text, text, integer, integer, text, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_by_timestamp(p_prefix text, p_bucket_id text, p_limit integer, p_level integer, p_start_after text, p_sort_order text, p_sort_column text, p_sort_column_after text) RETURNS TABLE(key text, name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $_$
DECLARE
    v_cursor_op text;
    v_query text;
    v_prefix text;
BEGIN
    v_prefix := coalesce(p_prefix, '');

    IF p_sort_order = 'asc' THEN
        v_cursor_op := '>';
    ELSE
        v_cursor_op := '<';
    END IF;

    v_query := format($sql$
        WITH raw_objects AS (
            SELECT
                o.name AS obj_name,
                o.id AS obj_id,
                o.updated_at AS obj_updated_at,
                o.created_at AS obj_created_at,
                o.last_accessed_at AS obj_last_accessed_at,
                o.metadata AS obj_metadata,
                storage.get_common_prefix(o.name, $1, '/') AS common_prefix
            FROM storage.objects o
            WHERE o.bucket_id = $2
              AND o.name COLLATE "C" LIKE $1 || '%%'
        ),
        -- Aggregate common prefixes (folders)
        -- Both created_at and updated_at use MIN(obj_created_at) to match the old prefixes table behavior
        aggregated_prefixes AS (
            SELECT
                rtrim(common_prefix, '/') AS name,
                NULL::uuid AS id,
                MIN(obj_created_at) AS updated_at,
                MIN(obj_created_at) AS created_at,
                NULL::timestamptz AS last_accessed_at,
                NULL::jsonb AS metadata,
                TRUE AS is_prefix
            FROM raw_objects
            WHERE common_prefix IS NOT NULL
            GROUP BY common_prefix
        ),
        leaf_objects AS (
            SELECT
                obj_name AS name,
                obj_id AS id,
                obj_updated_at AS updated_at,
                obj_created_at AS created_at,
                obj_last_accessed_at AS last_accessed_at,
                obj_metadata AS metadata,
                FALSE AS is_prefix
            FROM raw_objects
            WHERE common_prefix IS NULL
        ),
        combined AS (
            SELECT * FROM aggregated_prefixes
            UNION ALL
            SELECT * FROM leaf_objects
        ),
        filtered AS (
            SELECT *
            FROM combined
            WHERE (
                $5 = ''
                OR ROW(
                    date_trunc('milliseconds', %I),
                    name COLLATE "C"
                ) %s ROW(
                    COALESCE(NULLIF($6, '')::timestamptz, 'epoch'::timestamptz),
                    $5
                )
            )
        )
        SELECT
            split_part(name, '/', $3) AS key,
            name,
            id,
            updated_at,
            created_at,
            last_accessed_at,
            metadata
        FROM filtered
        ORDER BY
            COALESCE(date_trunc('milliseconds', %I), 'epoch'::timestamptz) %s,
            name COLLATE "C" %s
        LIMIT $4
    $sql$,
        p_sort_column,
        v_cursor_op,
        p_sort_column,
        p_sort_order,
        p_sort_order
    );

    RETURN QUERY EXECUTE v_query
    USING v_prefix, p_bucket_id, p_level, p_limit, p_start_after, p_sort_column_after;
END;
$_$;


--
-- Name: search_v2(text, text, integer, integer, text, text, text, text); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.search_v2(prefix text, bucket_name text, limits integer DEFAULT 100, levels integer DEFAULT 1, start_after text DEFAULT ''::text, sort_order text DEFAULT 'asc'::text, sort_column text DEFAULT 'name'::text, sort_column_after text DEFAULT ''::text) RETURNS TABLE(key text, name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)
    LANGUAGE plpgsql STABLE
    AS $$
DECLARE
    v_sort_col text;
    v_sort_ord text;
    v_limit int;
BEGIN
    -- Cap limit to maximum of 1500 records
    v_limit := LEAST(coalesce(limits, 100), 1500);

    -- Validate and normalize sort_order
    v_sort_ord := lower(coalesce(sort_order, 'asc'));
    IF v_sort_ord NOT IN ('asc', 'desc') THEN
        v_sort_ord := 'asc';
    END IF;

    -- Validate and normalize sort_column
    v_sort_col := lower(coalesce(sort_column, 'name'));
    IF v_sort_col NOT IN ('name', 'updated_at', 'created_at') THEN
        v_sort_col := 'name';
    END IF;

    -- Route to appropriate implementation
    IF v_sort_col = 'name' THEN
        -- Use list_objects_with_delimiter for name sorting (most efficient: O(k * log n))
        RETURN QUERY
        SELECT
            split_part(l.name, '/', levels) AS key,
            l.name AS name,
            l.id,
            l.updated_at,
            l.created_at,
            l.last_accessed_at,
            l.metadata
        FROM storage.list_objects_with_delimiter(
            bucket_name,
            coalesce(prefix, ''),
            '/',
            v_limit,
            start_after,
            '',
            v_sort_ord
        ) l;
    ELSE
        -- Use aggregation approach for timestamp sorting
        -- Not efficient for large datasets but supports correct pagination
        RETURN QUERY SELECT * FROM storage.search_by_timestamp(
            prefix, bucket_name, v_limit, levels, start_after,
            v_sort_ord, v_sort_col, sort_column_after
        );
    END IF;
END;
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: storage; Owner: -
--

CREATE FUNCTION storage.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW; 
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: audit_log_entries; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.audit_log_entries (
    instance_id uuid,
    id uuid NOT NULL,
    payload json,
    created_at timestamp with time zone,
    ip_address character varying(64) DEFAULT ''::character varying NOT NULL
);


--
-- Name: TABLE audit_log_entries; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.audit_log_entries IS 'Auth: Audit trail for user actions.';


--
-- Name: custom_oauth_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.custom_oauth_providers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    provider_type text NOT NULL,
    identifier text NOT NULL,
    name text NOT NULL,
    client_id text NOT NULL,
    client_secret text NOT NULL,
    acceptable_client_ids text[] DEFAULT '{}'::text[] NOT NULL,
    scopes text[] DEFAULT '{}'::text[] NOT NULL,
    pkce_enabled boolean DEFAULT true NOT NULL,
    attribute_mapping jsonb DEFAULT '{}'::jsonb NOT NULL,
    authorization_params jsonb DEFAULT '{}'::jsonb NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    email_optional boolean DEFAULT false NOT NULL,
    issuer text,
    discovery_url text,
    skip_nonce_check boolean DEFAULT false NOT NULL,
    cached_discovery jsonb,
    discovery_cached_at timestamp with time zone,
    authorization_url text,
    token_url text,
    userinfo_url text,
    jwks_uri text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    custom_claims_allowlist text[] DEFAULT '{}'::text[] NOT NULL,
    CONSTRAINT custom_oauth_providers_authorization_url_https CHECK (((authorization_url IS NULL) OR (authorization_url ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_authorization_url_length CHECK (((authorization_url IS NULL) OR (char_length(authorization_url) <= 2048))),
    CONSTRAINT custom_oauth_providers_client_id_length CHECK (((char_length(client_id) >= 1) AND (char_length(client_id) <= 512))),
    CONSTRAINT custom_oauth_providers_discovery_url_length CHECK (((discovery_url IS NULL) OR (char_length(discovery_url) <= 2048))),
    CONSTRAINT custom_oauth_providers_identifier_format CHECK ((identifier ~ '^[a-z0-9][a-z0-9:-]{0,48}[a-z0-9]$'::text)),
    CONSTRAINT custom_oauth_providers_issuer_length CHECK (((issuer IS NULL) OR ((char_length(issuer) >= 1) AND (char_length(issuer) <= 2048)))),
    CONSTRAINT custom_oauth_providers_jwks_uri_https CHECK (((jwks_uri IS NULL) OR (jwks_uri ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_jwks_uri_length CHECK (((jwks_uri IS NULL) OR (char_length(jwks_uri) <= 2048))),
    CONSTRAINT custom_oauth_providers_name_length CHECK (((char_length(name) >= 1) AND (char_length(name) <= 100))),
    CONSTRAINT custom_oauth_providers_oauth2_requires_endpoints CHECK (((provider_type <> 'oauth2'::text) OR ((authorization_url IS NOT NULL) AND (token_url IS NOT NULL) AND (userinfo_url IS NOT NULL)))),
    CONSTRAINT custom_oauth_providers_oidc_discovery_url_https CHECK (((provider_type <> 'oidc'::text) OR (discovery_url IS NULL) OR (discovery_url ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_oidc_issuer_https CHECK (((provider_type <> 'oidc'::text) OR (issuer IS NULL) OR (issuer ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_oidc_requires_issuer CHECK (((provider_type <> 'oidc'::text) OR (issuer IS NOT NULL))),
    CONSTRAINT custom_oauth_providers_provider_type_check CHECK ((provider_type = ANY (ARRAY['oauth2'::text, 'oidc'::text]))),
    CONSTRAINT custom_oauth_providers_token_url_https CHECK (((token_url IS NULL) OR (token_url ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_token_url_length CHECK (((token_url IS NULL) OR (char_length(token_url) <= 2048))),
    CONSTRAINT custom_oauth_providers_userinfo_url_https CHECK (((userinfo_url IS NULL) OR (userinfo_url ~~ 'https://%'::text))),
    CONSTRAINT custom_oauth_providers_userinfo_url_length CHECK (((userinfo_url IS NULL) OR (char_length(userinfo_url) <= 2048)))
);


--
-- Name: flow_state; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.flow_state (
    id uuid NOT NULL,
    user_id uuid,
    auth_code text,
    code_challenge_method auth.code_challenge_method,
    code_challenge text,
    provider_type text NOT NULL,
    provider_access_token text,
    provider_refresh_token text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    authentication_method text NOT NULL,
    auth_code_issued_at timestamp with time zone,
    invite_token text,
    referrer text,
    oauth_client_state_id uuid,
    linking_target_id uuid,
    email_optional boolean DEFAULT false NOT NULL
);


--
-- Name: TABLE flow_state; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.flow_state IS 'Stores metadata for all OAuth/SSO login flows';


--
-- Name: identities; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.identities (
    provider_id text NOT NULL,
    user_id uuid NOT NULL,
    identity_data jsonb NOT NULL,
    provider text NOT NULL,
    last_sign_in_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    email text GENERATED ALWAYS AS (lower((identity_data ->> 'email'::text))) STORED,
    id uuid DEFAULT gen_random_uuid() NOT NULL
);


--
-- Name: TABLE identities; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.identities IS 'Auth: Stores identities associated to a user.';


--
-- Name: COLUMN identities.email; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.identities.email IS 'Auth: Email is a generated column that references the optional email property in the identity_data';


--
-- Name: instances; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.instances (
    id uuid NOT NULL,
    uuid uuid,
    raw_base_config text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


--
-- Name: TABLE instances; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.instances IS 'Auth: Manages users across multiple sites.';


--
-- Name: mfa_amr_claims; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_amr_claims (
    session_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    authentication_method text NOT NULL,
    id uuid NOT NULL
);


--
-- Name: TABLE mfa_amr_claims; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_amr_claims IS 'auth: stores authenticator method reference claims for multi factor authentication';


--
-- Name: mfa_challenges; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_challenges (
    id uuid NOT NULL,
    factor_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    verified_at timestamp with time zone,
    ip_address inet NOT NULL,
    otp_code text,
    web_authn_session_data jsonb
);


--
-- Name: TABLE mfa_challenges; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_challenges IS 'auth: stores metadata about challenge requests made';


--
-- Name: mfa_factors; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.mfa_factors (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    friendly_name text,
    factor_type auth.factor_type NOT NULL,
    status auth.factor_status NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    secret text,
    phone text,
    last_challenged_at timestamp with time zone,
    web_authn_credential jsonb,
    web_authn_aaguid uuid,
    last_webauthn_challenge_data jsonb
);


--
-- Name: TABLE mfa_factors; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.mfa_factors IS 'auth: stores metadata about factors';


--
-- Name: COLUMN mfa_factors.last_webauthn_challenge_data; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.mfa_factors.last_webauthn_challenge_data IS 'Stores the latest WebAuthn challenge data including attestation/assertion for customer verification';


--
-- Name: oauth_authorizations; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_authorizations (
    id uuid NOT NULL,
    authorization_id text NOT NULL,
    client_id uuid NOT NULL,
    user_id uuid,
    redirect_uri text NOT NULL,
    scope text NOT NULL,
    state text,
    resource text,
    code_challenge text,
    code_challenge_method auth.code_challenge_method,
    response_type auth.oauth_response_type DEFAULT 'code'::auth.oauth_response_type NOT NULL,
    status auth.oauth_authorization_status DEFAULT 'pending'::auth.oauth_authorization_status NOT NULL,
    authorization_code text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    expires_at timestamp with time zone DEFAULT (now() + '00:03:00'::interval) NOT NULL,
    approved_at timestamp with time zone,
    nonce text,
    CONSTRAINT oauth_authorizations_authorization_code_length CHECK ((char_length(authorization_code) <= 255)),
    CONSTRAINT oauth_authorizations_code_challenge_length CHECK ((char_length(code_challenge) <= 128)),
    CONSTRAINT oauth_authorizations_expires_at_future CHECK ((expires_at > created_at)),
    CONSTRAINT oauth_authorizations_nonce_length CHECK ((char_length(nonce) <= 255)),
    CONSTRAINT oauth_authorizations_redirect_uri_length CHECK ((char_length(redirect_uri) <= 2048)),
    CONSTRAINT oauth_authorizations_resource_length CHECK ((char_length(resource) <= 2048)),
    CONSTRAINT oauth_authorizations_scope_length CHECK ((char_length(scope) <= 4096)),
    CONSTRAINT oauth_authorizations_state_length CHECK ((char_length(state) <= 4096))
);


--
-- Name: oauth_client_states; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_client_states (
    id uuid NOT NULL,
    provider_type text NOT NULL,
    code_verifier text,
    created_at timestamp with time zone NOT NULL
);


--
-- Name: TABLE oauth_client_states; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.oauth_client_states IS 'Stores OAuth states for third-party provider authentication flows where Supabase acts as the OAuth client.';


--
-- Name: oauth_clients; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_clients (
    id uuid NOT NULL,
    client_secret_hash text,
    registration_type auth.oauth_registration_type NOT NULL,
    redirect_uris text NOT NULL,
    grant_types text NOT NULL,
    client_name text,
    client_uri text,
    logo_uri text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone,
    client_type auth.oauth_client_type DEFAULT 'confidential'::auth.oauth_client_type NOT NULL,
    token_endpoint_auth_method text NOT NULL,
    CONSTRAINT oauth_clients_client_name_length CHECK ((char_length(client_name) <= 1024)),
    CONSTRAINT oauth_clients_client_uri_length CHECK ((char_length(client_uri) <= 2048)),
    CONSTRAINT oauth_clients_logo_uri_length CHECK ((char_length(logo_uri) <= 2048)),
    CONSTRAINT oauth_clients_token_endpoint_auth_method_check CHECK ((token_endpoint_auth_method = ANY (ARRAY['client_secret_basic'::text, 'client_secret_post'::text, 'none'::text])))
);


--
-- Name: oauth_consents; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.oauth_consents (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    client_id uuid NOT NULL,
    scopes text NOT NULL,
    granted_at timestamp with time zone DEFAULT now() NOT NULL,
    revoked_at timestamp with time zone,
    CONSTRAINT oauth_consents_revoked_after_granted CHECK (((revoked_at IS NULL) OR (revoked_at >= granted_at))),
    CONSTRAINT oauth_consents_scopes_length CHECK ((char_length(scopes) <= 2048)),
    CONSTRAINT oauth_consents_scopes_not_empty CHECK ((char_length(TRIM(BOTH FROM scopes)) > 0))
);


--
-- Name: one_time_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.one_time_tokens (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    token_type auth.one_time_token_type NOT NULL,
    token_hash text NOT NULL,
    relates_to text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT one_time_tokens_token_hash_check CHECK ((char_length(token_hash) > 0))
);


--
-- Name: refresh_tokens; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.refresh_tokens (
    instance_id uuid,
    id bigint NOT NULL,
    token character varying(255),
    user_id character varying(255),
    revoked boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    parent character varying(255),
    session_id uuid
);


--
-- Name: TABLE refresh_tokens; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.refresh_tokens IS 'Auth: Store of tokens used to refresh JWT tokens once they expire.';


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: auth; Owner: -
--

CREATE SEQUENCE auth.refresh_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: -
--

ALTER SEQUENCE auth.refresh_tokens_id_seq OWNED BY auth.refresh_tokens.id;


--
-- Name: saml_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_providers (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    entity_id text NOT NULL,
    metadata_xml text NOT NULL,
    metadata_url text,
    attribute_mapping jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    name_id_format text,
    CONSTRAINT "entity_id not empty" CHECK ((char_length(entity_id) > 0)),
    CONSTRAINT "metadata_url not empty" CHECK (((metadata_url = NULL::text) OR (char_length(metadata_url) > 0))),
    CONSTRAINT "metadata_xml not empty" CHECK ((char_length(metadata_xml) > 0))
);


--
-- Name: TABLE saml_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_providers IS 'Auth: Manages SAML Identity Provider connections.';


--
-- Name: saml_relay_states; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.saml_relay_states (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    request_id text NOT NULL,
    for_email text,
    redirect_to text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    flow_state_id uuid,
    CONSTRAINT "request_id not empty" CHECK ((char_length(request_id) > 0))
);


--
-- Name: TABLE saml_relay_states; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.saml_relay_states IS 'Auth: Contains SAML Relay State information for each Service Provider initiated login.';


--
-- Name: schema_migrations; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.schema_migrations (
    version character varying(255) NOT NULL
);


--
-- Name: TABLE schema_migrations; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.schema_migrations IS 'Auth: Manages updates to the auth system.';


--
-- Name: sessions; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sessions (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    factor_id uuid,
    aal auth.aal_level,
    not_after timestamp with time zone,
    refreshed_at timestamp without time zone,
    user_agent text,
    ip inet,
    tag text,
    oauth_client_id uuid,
    refresh_token_hmac_key text,
    refresh_token_counter bigint,
    scopes text,
    CONSTRAINT sessions_scopes_length CHECK ((char_length(scopes) <= 4096))
);


--
-- Name: TABLE sessions; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sessions IS 'Auth: Stores session data associated to a user.';


--
-- Name: COLUMN sessions.not_after; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.not_after IS 'Auth: Not after is a nullable column that contains a timestamp after which the session should be regarded as expired.';


--
-- Name: COLUMN sessions.refresh_token_hmac_key; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.refresh_token_hmac_key IS 'Holds a HMAC-SHA256 key used to sign refresh tokens for this session.';


--
-- Name: COLUMN sessions.refresh_token_counter; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sessions.refresh_token_counter IS 'Holds the ID (counter) of the last issued refresh token.';


--
-- Name: sso_domains; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_domains (
    id uuid NOT NULL,
    sso_provider_id uuid NOT NULL,
    domain text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT "domain not empty" CHECK ((char_length(domain) > 0))
);


--
-- Name: TABLE sso_domains; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_domains IS 'Auth: Manages SSO email address domain mapping to an SSO Identity Provider.';


--
-- Name: sso_providers; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.sso_providers (
    id uuid NOT NULL,
    resource_id text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    disabled boolean,
    CONSTRAINT "resource_id not empty" CHECK (((resource_id = NULL::text) OR (char_length(resource_id) > 0)))
);


--
-- Name: TABLE sso_providers; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.sso_providers IS 'Auth: Manages SSO identity provider information; see saml_providers for SAML.';


--
-- Name: COLUMN sso_providers.resource_id; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.sso_providers.resource_id IS 'Auth: Uniquely identifies a SSO provider according to a user-chosen resource ID (case insensitive), useful in infrastructure as code.';


--
-- Name: users; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.users (
    instance_id uuid,
    id uuid NOT NULL,
    aud character varying(255),
    role character varying(255),
    email character varying(255),
    encrypted_password character varying(255),
    email_confirmed_at timestamp with time zone,
    invited_at timestamp with time zone,
    confirmation_token character varying(255),
    confirmation_sent_at timestamp with time zone,
    recovery_token character varying(255),
    recovery_sent_at timestamp with time zone,
    email_change_token_new character varying(255),
    email_change character varying(255),
    email_change_sent_at timestamp with time zone,
    last_sign_in_at timestamp with time zone,
    raw_app_meta_data jsonb,
    raw_user_meta_data jsonb,
    is_super_admin boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    phone text DEFAULT NULL::character varying,
    phone_confirmed_at timestamp with time zone,
    phone_change text DEFAULT ''::character varying,
    phone_change_token character varying(255) DEFAULT ''::character varying,
    phone_change_sent_at timestamp with time zone,
    confirmed_at timestamp with time zone GENERATED ALWAYS AS (LEAST(email_confirmed_at, phone_confirmed_at)) STORED,
    email_change_token_current character varying(255) DEFAULT ''::character varying,
    email_change_confirm_status smallint DEFAULT 0,
    banned_until timestamp with time zone,
    reauthentication_token character varying(255) DEFAULT ''::character varying,
    reauthentication_sent_at timestamp with time zone,
    is_sso_user boolean DEFAULT false NOT NULL,
    deleted_at timestamp with time zone,
    is_anonymous boolean DEFAULT false NOT NULL,
    CONSTRAINT users_email_change_confirm_status_check CHECK (((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)))
);


--
-- Name: TABLE users; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON TABLE auth.users IS 'Auth: Stores user login data within a secure schema.';


--
-- Name: COLUMN users.is_sso_user; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON COLUMN auth.users.is_sso_user IS 'Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails.';


--
-- Name: webauthn_challenges; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.webauthn_challenges (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    challenge_type text NOT NULL,
    session_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    CONSTRAINT webauthn_challenges_challenge_type_check CHECK ((challenge_type = ANY (ARRAY['signup'::text, 'registration'::text, 'authentication'::text])))
);


--
-- Name: webauthn_credentials; Type: TABLE; Schema: auth; Owner: -
--

CREATE TABLE auth.webauthn_credentials (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    credential_id bytea NOT NULL,
    public_key bytea NOT NULL,
    attestation_type text DEFAULT ''::text NOT NULL,
    aaguid uuid,
    sign_count bigint DEFAULT 0 NOT NULL,
    transports jsonb DEFAULT '[]'::jsonb NOT NULL,
    backup_eligible boolean DEFAULT false NOT NULL,
    backed_up boolean DEFAULT false NOT NULL,
    friendly_name text DEFAULT ''::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    last_used_at timestamp with time zone
);


--
-- Name: admin_settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.admin_settings (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    setting_key text NOT NULL,
    setting_value jsonb NOT NULL,
    description text,
    updated_at timestamp with time zone DEFAULT now(),
    updated_by uuid
);


--
-- Name: ambiance_table_entries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ambiance_table_entries (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    table_name text NOT NULL,
    variante text NOT NULL,
    value text NOT NULL,
    weight text DEFAULT 'frequent'::text NOT NULL,
    is_official boolean DEFAULT false NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    reject_reason text,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    approved_by uuid,
    approved_at timestamp with time zone,
    CONSTRAINT ambiance_table_entries_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text]))),
    CONSTRAINT ambiance_table_entries_table_name_check CHECK ((table_name = ANY (ARRAY['decor'::text, 'evenement'::text, 'meteo'::text, 'intrigue'::text]))),
    CONSTRAINT ambiance_table_entries_weight_check CHECK ((weight = ANY (ARRAY['extremement_rare'::text, 'rare'::text, 'peu_frequent'::text, 'frequent'::text, 'tres_frequent'::text]))),
    CONSTRAINT variante_valide CHECK ((((table_name = 'decor'::text) AND (variante = ANY (ARRAY['paris_populaire'::text, 'paris_riche'::text, 'banlieue_industrielle'::text, 'campagne_rurale'::text]))) OR ((table_name = 'evenement'::text) AND (variante = ANY (ARRAY['paris_jour'::text, 'paris_nuit'::text, 'banlieue_industrielle_jour'::text, 'banlieue_industrielle_nuit'::text, 'campagne_rurale_jour'::text, 'campagne_rurale_nuit'::text]))) OR ((table_name = 'meteo'::text) AND (variante = ANY (ARRAY['hiver'::text, 'printemps'::text, 'ete'::text, 'automne'::text]))) OR ((table_name = 'intrigue'::text) AND (variante = ANY (ARRAY['horror'::text, 'espionage'::text, 'pulp'::text])))))
);


--
-- Name: bug_reports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bug_reports (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    image_url text,
    status text DEFAULT 'Signalé'::text,
    community_weight jsonb DEFAULT '[]'::jsonb,
    is_confidential boolean DEFAULT false,
    version_app text DEFAULT 'Inconnue'::text,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: cercle_membres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cercle_membres (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cercle_id uuid NOT NULL,
    user_id uuid NOT NULL,
    character_id uuid,
    joined_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);


--
-- Name: cercle_revelations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cercle_revelations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cercle_id uuid NOT NULL,
    item_id uuid NOT NULL,
    revealed_at timestamp with time zone DEFAULT now(),
    revealed_by uuid,
    xp_distributed boolean DEFAULT false,
    bonus_element_distribue boolean DEFAULT false
);


--
-- Name: cercles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cercles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    docte_id uuid,
    code_invitation text NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);


--
-- Name: character_snapshots; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.character_snapshots (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    character_id uuid NOT NULL,
    user_id uuid NOT NULL,
    titre text NOT NULL,
    notes text,
    character_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: characters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.characters (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    nom character varying(255) NOT NULL,
    sexe character varying(50) NOT NULL,
    type_fee character varying(100) NOT NULL,
    anciennete character varying(50),
    caracteristiques jsonb DEFAULT '{}'::jsonb,
    profils jsonb DEFAULT '{"majeur": {"nom": "", "trait": "", "competences": []}, "mineur": {"nom": "", "trait": "", "competences": []}}'::jsonb,
    competences_libres jsonb DEFAULT '{}'::jsonb,
    competences_futiles jsonb DEFAULT '{"rangs": {}, "personnalisees": []}'::jsonb,
    capacite_choisie character varying(255),
    pouvoirs jsonb DEFAULT '[]'::jsonb,
    is_public boolean DEFAULT false,
    data jsonb DEFAULT '{}'::jsonb,
    apparence text,
    taille text,
    poids text,
    nom_feerique text,
    genre_humain text,
    traits_feeriques jsonb,
    atouts jsonb DEFAULT '[]'::jsonb,
    vie_sociale jsonb DEFAULT '{}'::jsonb,
    fortune smallint DEFAULT 0,
    statut text DEFAULT 'brouillon'::text,
    xp_total integer DEFAULT 0,
    xp_depense integer DEFAULT 0,
    transfer_code text,
    portrait_masked_url text,
    portrait_unmasked_url text,
    is_unmasked_revealed boolean DEFAULT false NOT NULL,
    needs_correction boolean DEFAULT false,
    correction_reason text,
    correction_authorized boolean,
    correction_responded_at timestamp with time zone,
    correction_done boolean DEFAULT false,
    type_personnage character varying DEFAULT 'fee'::character varying,
    rang_humain character varying,
    xp_dette boolean DEFAULT false NOT NULL,
    CONSTRAINT check_statut CHECK ((statut = ANY (ARRAY['brouillon'::text, 'validé'::text, 'valide'::text, 'archivé'::text, 'archive'::text, 'scellé'::text, 'scelle'::text]))),
    CONSTRAINT check_xp_coherence CHECK (((xp_depense <= xp_total) OR (xp_dette = true)))
);


--
-- Name: TABLE characters; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.characters IS 'Table principale stockant tous les personnages créés par les utilisateurs';


--
-- Name: COLUMN characters.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.id IS 'Identifiant unique du personnage (UUID)';


--
-- Name: COLUMN characters.user_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.user_id IS 'Référence à l''utilisateur propriétaire (auth.users)';


--
-- Name: COLUMN characters.created_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.created_at IS 'Date et heure de création du personnage';


--
-- Name: COLUMN characters.updated_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.updated_at IS 'Date et heure de dernière modification';


--
-- Name: COLUMN characters.nom; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.nom IS 'Nom du personnage';


--
-- Name: COLUMN characters.sexe; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.sexe IS 'Sexe du personnage (Homme, Femme, Androgyne)';


--
-- Name: COLUMN characters.type_fee; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.type_fee IS 'Type de fée (ex: Ange, Bastet, Elfe, etc.)';


--
-- Name: COLUMN characters.anciennete; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.anciennete IS 'Ancienneté de la fée (ancienne ou moderne)';


--
-- Name: COLUMN characters.caracteristiques; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.caracteristiques IS 'Caractéristiques du personnage (agilité, force, etc.) au format JSON';


--
-- Name: COLUMN characters.profils; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.profils IS 'Profils majeur et mineur avec traits et compétences au format JSON';


--
-- Name: COLUMN characters.competences_libres; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.competences_libres IS 'Compétences libres avec rangs et spécialités au format JSON';


--
-- Name: COLUMN characters.competences_futiles; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.competences_futiles IS 'Compétences futiles avec rangs et compétences personnalisées au format JSON';


--
-- Name: COLUMN characters.capacite_choisie; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.capacite_choisie IS 'Nom de la capacité choisie parmi les 3 options';


--
-- Name: COLUMN characters.pouvoirs; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.pouvoirs IS 'Liste des 3 pouvoirs choisis au format JSON';


--
-- Name: COLUMN characters.is_public; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.is_public IS 'Indique si le personnage est visible publiquement';


--
-- Name: COLUMN characters.data; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.data IS 'Copie complète de toutes les données du personnage au format JSON (backup)';


--
-- Name: COLUMN characters.needs_correction; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.needs_correction IS 'Signalé par le Docte (super_admin) : ce personnage nécessite une correction.';


--
-- Name: COLUMN characters.correction_reason; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.correction_reason IS 'Raison de la correction, écrite par le Docte.';


--
-- Name: COLUMN characters.correction_authorized; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.correction_authorized IS 'NULL = en attente, TRUE = joueur autorise, FALSE = joueur refuse.';


--
-- Name: COLUMN characters.correction_responded_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.correction_responded_at IS 'Horodatage de la réponse du joueur.';


--
-- Name: COLUMN characters.correction_done; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.correction_done IS 'Le Docte a corrigé ce personnage. Déclenche une notification joueur au prochain login, puis repasse à FALSE.';


--
-- Name: COLUMN characters.type_personnage; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.type_personnage IS 'Type de personnage : fee (défaut) ou humain';


--
-- Name: COLUMN characters.rang_humain; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.characters.rang_humain IS 'Rang du personnage humain : larbin, acolyte, pointure, cador (null pour les fées)';


--
-- Name: character_stats; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.character_stats WITH (security_invoker='true') AS
 SELECT type_fee,
    anciennete,
    count(*) AS total,
    count(
        CASE
            WHEN is_public THEN 1
            ELSE NULL::integer
        END) AS public_count,
    count(DISTINCT user_id) AS unique_users
   FROM public.characters
  GROUP BY type_fee, anciennete
  ORDER BY (count(*)) DESC;


--
-- Name: VIEW character_stats; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON VIEW public.character_stats IS 'Statistiques sur les personnages par type et ancienneté';


--
-- Name: chat_channels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chat_channels (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type text NOT NULL,
    name text,
    cercle_id uuid,
    participant_1 uuid,
    participant_2 uuid,
    status text DEFAULT 'open'::text,
    last_message_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT chat_channels_type_check CHECK ((type = ANY (ARRAY['global'::text, 'support'::text, 'private'::text, 'cercle'::text, 'initie'::text])))
);


--
-- Name: chat_message_reads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chat_message_reads (
    message_id uuid NOT NULL,
    user_id uuid NOT NULL,
    read_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: TABLE chat_message_reads; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.chat_message_reads IS 'Accusés de réception du Télégraphe — enregistre qui a lu quel message.';


--
-- Name: chat_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chat_messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    channel_id uuid,
    user_id uuid,
    message text NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: chroniques_heritiers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chroniques_heritiers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    character_id uuid NOT NULL,
    session_id uuid,
    titre text NOT NULL,
    date_session date DEFAULT CURRENT_DATE NOT NULL,
    memoire_des_faits text,
    cicatrices_et_honneurs text,
    indices_et_verites jsonb DEFAULT '[]'::jsonb NOT NULL,
    xp_acquis integer DEFAULT 0 NOT NULL,
    created_by uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: competences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.competences (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    has_specialites boolean DEFAULT false,
    specialites jsonb,
    profil_id uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    is_sealed boolean DEFAULT false
);


--
-- Name: TABLE competences; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.competences IS 'Liste des compétences du jeu avec leurs spécialités';


--
-- Name: COLUMN competences.specialites; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.competences.specialites IS 'Array JSON des spécialités disponibles';


--
-- Name: competences_futiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.competences_futiles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    is_sealed boolean DEFAULT false
);


--
-- Name: TABLE competences_futiles; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.competences_futiles IS 'Les 44 compétences futiles du jeu';


--
-- Name: COLUMN competences_futiles.description; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.competences_futiles.description IS 'Description détaillée de la compétence futile';


--
-- Name: data_change_requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.data_change_requests (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    table_name text NOT NULL,
    record_id text,
    record_name text NOT NULL,
    new_data jsonb NOT NULL,
    justification text NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    approved_at timestamp with time zone,
    approved_by uuid,
    generated_sql text,
    rejection_reason text,
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: fairy_assets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_assets (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    description text,
    effets text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    effets_techniques jsonb DEFAULT '{}'::jsonb,
    is_sealed boolean DEFAULT false,
    is_official boolean DEFAULT true NOT NULL
);


--
-- Name: fairy_capacites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_capacites (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    bonus jsonb,
    is_sealed boolean DEFAULT false,
    is_official boolean DEFAULT true NOT NULL
);


--
-- Name: TABLE fairy_capacites; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.fairy_capacites IS 'Capacités spéciales par type de fée (fixes ou à choix)';


--
-- Name: COLUMN fairy_capacites.bonus; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_capacites.bonus IS 'Bonus apportés par la capacité (caracteristiques, competences, specialites)';


--
-- Name: fairy_competences_futiles_predilection; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_competences_futiles_predilection (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    fairy_type_id uuid NOT NULL,
    competence_name text,
    competence_futile_id uuid,
    is_choice boolean DEFAULT false,
    choice_options jsonb,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: TABLE fairy_competences_futiles_predilection; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.fairy_competences_futiles_predilection IS 'Compétences futiles de prédilection (ou choix entre plusieurs)';


--
-- Name: COLUMN fairy_competences_futiles_predilection.competence_name; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_futiles_predilection.competence_name IS 'DEPRECATED: Utiliser competence_futile_id à la place';


--
-- Name: COLUMN fairy_competences_futiles_predilection.competence_futile_id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_futiles_predilection.competence_futile_id IS 'ID de la compétence futile (V2 avec UUID)';


--
-- Name: COLUMN fairy_competences_futiles_predilection.is_choice; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_futiles_predilection.is_choice IS 'TRUE si c''est un choix entre plusieurs options';


--
-- Name: COLUMN fairy_competences_futiles_predilection.choice_options; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_futiles_predilection.choice_options IS 'Array JSON des options si is_choice=TRUE';


--
-- Name: fairy_competences_predilection; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_competences_predilection (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    fairy_type_id uuid NOT NULL,
    competence_id uuid,
    specialite text,
    is_choice boolean DEFAULT false,
    choice_ids uuid[],
    created_at timestamp with time zone DEFAULT now(),
    is_specialite_choice boolean DEFAULT false,
    choice_options text[],
    CONSTRAINT check_predilection_type CHECK ((((is_choice = false) AND (competence_id IS NOT NULL)) OR ((is_choice = true) AND (choice_ids IS NOT NULL))))
);


--
-- Name: TABLE fairy_competences_predilection; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.fairy_competences_predilection IS 'Compétences utiles de prédilection par type de fée (rang 2 de base).';


--
-- Name: COLUMN fairy_competences_predilection.specialite; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_predilection.specialite IS 'Spécialité typique offerte avec la compétence de prédilection.';


--
-- Name: COLUMN fairy_competences_predilection.choice_ids; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_competences_predilection.choice_ids IS 'Tableau d''UUIDs des compétences possibles si is_choice est vrai.';


--
-- Name: fairy_powers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_powers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    nom text NOT NULL,
    description text,
    type_pouvoir text,
    is_actif boolean DEFAULT true,
    bonus jsonb,
    is_sealed boolean DEFAULT false,
    is_official boolean DEFAULT true NOT NULL,
    CONSTRAINT fairy_powers_type_pouvoir_check CHECK ((type_pouvoir = ANY (ARRAY['masque'::text, 'demasque'::text, 'profond'::text, 'legendaire'::text, 'profond_masque'::text, 'profond_demasque'::text, 'legendaire_masque'::text, 'legendaire_demasque'::text])))
);


--
-- Name: fairy_type_assets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_type_assets (
    fairy_type_id uuid NOT NULL,
    asset_id uuid NOT NULL
);


--
-- Name: fairy_type_capacites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_type_capacites (
    fairy_type_id uuid NOT NULL,
    capacite_id uuid NOT NULL,
    capacite_type text DEFAULT 'choix'::text NOT NULL,
    CONSTRAINT fairy_type_capacites_capacite_type_check CHECK ((capacite_type = ANY (ARRAY['fixe1'::text, 'fixe2'::text, 'choix'::text])))
);


--
-- Name: fairy_type_powers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_type_powers (
    fairy_type_id uuid NOT NULL,
    power_id uuid NOT NULL
);


--
-- Name: fairy_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fairy_types (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    era text NOT NULL,
    description text,
    agilite_min integer NOT NULL,
    agilite_max integer NOT NULL,
    constitution_min integer NOT NULL,
    constitution_max integer NOT NULL,
    force_min integer NOT NULL,
    force_max integer NOT NULL,
    precision_min integer NOT NULL,
    precision_max integer NOT NULL,
    esprit_min integer NOT NULL,
    esprit_max integer NOT NULL,
    perception_min integer NOT NULL,
    perception_max integer NOT NULL,
    prestance_min integer NOT NULL,
    prestance_max integer NOT NULL,
    sang_froid_min integer NOT NULL,
    sang_froid_max integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    avantages text[] DEFAULT '{}'::text[],
    desavantages text[] DEFAULT '{}'::text[],
    allowed_genders text[] DEFAULT ARRAY['Homme'::text, 'Femme'::text],
    name_masculine text,
    name_feminine text,
    traits text[] DEFAULT '{}'::text[],
    taille_categorie text DEFAULT 'Moyenne'::text,
    is_sealed boolean DEFAULT false,
    is_secret boolean DEFAULT false,
    effets_techniques jsonb DEFAULT '{}'::jsonb,
    is_official boolean DEFAULT true NOT NULL,
    lore_apparence text,
    lore_taille text,
    lore_mode_reproduction text,
    lore_habitat text,
    lore_caractere text,
    lore_personnages_celebres text[],
    lore_note_docte text,
    CONSTRAINT fairy_types_agilite_min_check CHECK ((agilite_min >= 0)),
    CONSTRAINT fairy_types_check CHECK ((agilite_max >= agilite_min)),
    CONSTRAINT fairy_types_check1 CHECK ((constitution_max >= constitution_min)),
    CONSTRAINT fairy_types_check2 CHECK ((force_max >= force_min)),
    CONSTRAINT fairy_types_check3 CHECK ((precision_max >= precision_min)),
    CONSTRAINT fairy_types_check4 CHECK ((esprit_max >= esprit_min)),
    CONSTRAINT fairy_types_check5 CHECK ((perception_max >= perception_min)),
    CONSTRAINT fairy_types_check6 CHECK ((prestance_max >= prestance_min)),
    CONSTRAINT fairy_types_check7 CHECK ((sang_froid_max >= sang_froid_min)),
    CONSTRAINT fairy_types_constitution_min_check CHECK ((constitution_min >= 0)),
    CONSTRAINT fairy_types_era_check CHECK ((era = ANY (ARRAY['traditionnelle'::text, 'moderne'::text, 'enfoui'::text]))),
    CONSTRAINT fairy_types_esprit_min_check CHECK ((esprit_min >= 0)),
    CONSTRAINT fairy_types_force_min_check CHECK ((force_min >= 0)),
    CONSTRAINT fairy_types_perception_min_check CHECK ((perception_min >= 0)),
    CONSTRAINT fairy_types_precision_min_check CHECK ((precision_min >= 0)),
    CONSTRAINT fairy_types_prestance_min_check CHECK ((prestance_min >= 0)),
    CONSTRAINT fairy_types_sang_froid_min_check CHECK ((sang_froid_min >= 0))
);


--
-- Name: TABLE fairy_types; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.fairy_types IS 'Types de fées avec leurs caractéristiques de base';


--
-- Name: COLUMN fairy_types.era; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.fairy_types.era IS 'Époque: traditionnelle ou moderne';


--
-- Name: figures; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.figures (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    faux_semblant boolean DEFAULT false,
    faux_semblant_type_fee text,
    titre text,
    clan text,
    apparence_masquee text,
    apparence_demasquee text,
    description text,
    is_official boolean DEFAULT true,
    is_sealed boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    data jsonb DEFAULT '{}'::jsonb
);


--
-- Name: heritier_notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.heritier_notes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    player_id uuid,
    character_id uuid,
    cercle_id uuid,
    type text NOT NULL,
    content jsonb DEFAULT '{}'::jsonb NOT NULL,
    is_shared boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    CONSTRAINT heritier_notes_type_check CHECK ((type = ANY (ARRAY['note'::text, 'contact'::text, 'possession'::text])))
);


--
-- Name: historical_events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.historical_events (
    date date NOT NULL,
    paris text,
    france text,
    monde text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: indices_verites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.indices_verites (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    element_nom text NOT NULL,
    element_type text NOT NULL,
    type text NOT NULL,
    texte text NOT NULL,
    ordre integer DEFAULT 0 NOT NULL,
    CONSTRAINT indices_verites_element_type_check CHECK ((element_type = ANY (ARRAY['concept'::text, 'lieu'::text, 'personnage'::text, 'événement'::text]))),
    CONSTRAINT indices_verites_type_check CHECK ((type = ANY (ARRAY['indice'::text, 'verite_mineure'::text, 'verite_majeure'::text, 'dit_du_marcheur'::text])))
);


--
-- Name: itineraire_modes_perso; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itineraire_modes_perso (
    user_id uuid NOT NULL,
    nom text DEFAULT 'Mon mode'::text NOT NULL,
    emoji text DEFAULT '⚙️'::text NOT NULL,
    vitesse_kmh numeric DEFAULT 10 NOT NULL,
    en_vol boolean DEFAULT false NOT NULL
);


--
-- Name: journal_articles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journal_articles (
    id integer NOT NULL,
    article_index integer NOT NULL,
    date date NOT NULL,
    page integer NOT NULL,
    category character varying(255),
    title text NOT NULL,
    summary text,
    paragraphs jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: journal_articles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.journal_articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: journal_articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.journal_articles_id_seq OWNED BY public.journal_articles.id;


--
-- Name: journal_daily_info; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journal_daily_info (
    date date NOT NULL,
    sunrise time without time zone NOT NULL,
    sunset time without time zone NOT NULL,
    moon_phase text NOT NULL,
    moon_visible text NOT NULL,
    moon_aspect text NOT NULL,
    moon_desc text NOT NULL,
    moon_icon text NOT NULL,
    weather_condition text NOT NULL,
    weather_tmin numeric,
    weather_tmax numeric,
    weather_precip_mm numeric,
    weather_wind_kmh numeric,
    weather_icon text NOT NULL,
    weather_desc text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    daily_summary text
);


--
-- Name: journal_holidays; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journal_holidays (
    id integer NOT NULL,
    date date NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(50) NOT NULL,
    description text,
    traditions text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT journal_holidays_type_check CHECK (((type)::text = ANY (ARRAY[('chrétien'::character varying)::text, ('celtique'::character varying)::text])))
);


--
-- Name: journal_holidays_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.journal_holidays_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: journal_holidays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.journal_holidays_id_seq OWNED BY public.journal_holidays.id;


--
-- Name: journal_repair_requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journal_repair_requests (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    character_id uuid NOT NULL,
    character_nom text NOT NULL,
    requested_by uuid NOT NULL,
    requested_at timestamp with time zone DEFAULT now() NOT NULL,
    resolved_at timestamp with time zone,
    resolved_by uuid
);


--
-- Name: journal_votes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journal_votes (
    date date NOT NULL,
    votes_count integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);


--
-- Name: llm_usage_log; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.llm_usage_log (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    call_type text NOT NULL,
    model text NOT NULL,
    prompt_tokens integer NOT NULL,
    completion_tokens integer NOT NULL,
    total_tokens integer NOT NULL,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: map_points; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.map_points (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    description text,
    lat double precision NOT NULL,
    lng double precision NOT NULL,
    type text DEFAULT 'lieu'::text NOT NULL,
    linked_entity_type text,
    linked_entity_id uuid,
    icone text DEFAULT 'MapPin'::text,
    couleur text DEFAULT '#92400e'::text,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    visibilite text DEFAULT 'public'::text NOT NULL,
    visibilite_cercle_id uuid,
    forme text DEFAULT 'goutte'::text NOT NULL,
    adresse text,
    url text,
    CONSTRAINT map_points_type_check CHECK ((type = ANY (ARRAY['lieu'::text, 'evenement'::text, 'adresse_personnage'::text, 'cercle'::text, 'point_interet'::text])))
);


--
-- Name: menu_plats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.menu_plats (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    categorie text NOT NULL,
    niveaux text[] DEFAULT '{}'::text[] NOT NULL,
    saisons text[] DEFAULT '{}'::text[] NOT NULL,
    nb_convives_min integer,
    nb_convives_max integer,
    difficulte integer NOT NULL,
    accord_vin text,
    description_narrative text,
    description_reussite_critique text,
    description_echec_partiel text,
    description_echec_critique text,
    status text DEFAULT 'pending'::text NOT NULL,
    created_by uuid,
    approved_by uuid,
    reject_reason text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT menu_plats_categorie_check CHECK ((categorie = ANY (ARRAY['boisson_chaude'::text, 'viennoiserie'::text, 'potage'::text, 'hors_d_oeuvre'::text, 'poisson'::text, 'viande'::text, 'volaille'::text, 'gibier'::text, 'abats'::text, 'legume'::text, 'entremets'::text, 'fromage'::text, 'dessert'::text, 'patisserie'::text]))),
    CONSTRAINT menu_plats_difficulte_check CHECK (((difficulte >= 1) AND (difficulte <= 5))),
    CONSTRAINT menu_plats_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text])))
);


--
-- Name: menu_sauvegardes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.menu_sauvegardes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    utilisateur_id uuid NOT NULL,
    titre text,
    parametres jsonb NOT NULL,
    menu_genere jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: menu_structures; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.menu_structures (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    type_repas text NOT NULL,
    niveau_financier text NOT NULL,
    tranche_convives text NOT NULL,
    services jsonb NOT NULL,
    textes_intro text[] DEFAULT '{}'::text[] NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT menu_structures_niveau_financier_check CHECK ((niveau_financier = ANY (ARRAY['populaire'::text, 'bourgeois'::text, 'grande_bourgeoisie'::text, 'aristocratie'::text]))),
    CONSTRAINT menu_structures_tranche_convives_check CHECK ((tranche_convives = ANY (ARRAY['intime'::text, 'tablee'::text, 'banquet'::text]))),
    CONSTRAINT menu_structures_type_repas_check CHECK ((type_repas = ANY (ARRAY['petit_dejeuner'::text, 'dejeuner'::text, 'diner'::text, 'souper'::text, 'gouter'::text, 'banquet'::text])))
);


--
-- Name: notification_history; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notification_history (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    version text NOT NULL,
    version_type text NOT NULL,
    changelog text NOT NULL,
    sent_at timestamp with time zone DEFAULT now(),
    email_status text DEFAULT 'sent'::text
);


--
-- Name: TABLE notification_history; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.notification_history IS 'Historique des notifications envoyées aux utilisateurs';


--
-- Name: ombre_consequences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ombre_consequences (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    character_id uuid NOT NULL,
    cercle_id uuid NOT NULL,
    session_id uuid,
    contenu text NOT NULL,
    est_revelee boolean DEFAULT false NOT NULL,
    revelee_at timestamp with time zone,
    created_by uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: outil_usage; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.outil_usage (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    outil text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: pnj_table_entries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pnj_table_entries (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    table_name text NOT NULL,
    tranche_age text,
    value_m text NOT NULL,
    value_f text,
    status text DEFAULT 'pending'::text NOT NULL,
    reject_reason text,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    approved_by uuid,
    approved_at timestamp with time zone,
    polarity text DEFAULT 'n'::text NOT NULL,
    weight text DEFAULT 'frequent'::text NOT NULL,
    CONSTRAINT metiers_need_tranche CHECK (((table_name <> 'metiers'::text) OR (tranche_age IS NOT NULL))),
    CONSTRAINT non_metiers_no_tranche CHECK (((table_name = 'metiers'::text) OR (tranche_age IS NULL))),
    CONSTRAINT pnj_table_entries_polarity_check CHECK ((polarity = ANY (ARRAY['l2'::text, 'l1'::text, 'n'::text, 'd1'::text, 'd2'::text]))),
    CONSTRAINT pnj_table_entries_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text]))),
    CONSTRAINT pnj_table_entries_table_name_check CHECK ((table_name = ANY (ARRAY['traits'::text, 'apparences'::text, 'motivations'::text, 'secrets'::text, 'phobies'::text, 'hobbies'::text, 'comportements'::text, 'metiers'::text, 'tranches_age'::text, 'sexes'::text, 'genres'::text, 'nationalites'::text, 'situations_matrimoniales'::text, 'situations_familiales'::text]))),
    CONSTRAINT pnj_table_entries_tranche_age_check CHECK (((tranche_age = ANY (ARRAY['jeune'::text, 'adulte'::text, 'mur'::text, 'age'::text])) OR (tranche_age IS NULL))),
    CONSTRAINT pnj_table_entries_weight_check CHECK ((weight = ANY (ARRAY['extremement_rare'::text, 'rare'::text, 'peu_frequent'::text, 'frequent'::text, 'tres_frequent'::text])))
);


--
-- Name: poche_table_entries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.poche_table_entries (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    table_name text NOT NULL,
    saison text,
    value_m text NOT NULL,
    value_f text,
    weight text DEFAULT 'frequent'::text NOT NULL,
    is_official boolean DEFAULT false NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    reject_reason text,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    approved_by uuid,
    approved_at timestamp with time zone,
    CONSTRAINT non_saisonniere_no_saison CHECK (((table_name = 'fouille_saisonniere'::text) OR (saison IS NULL))),
    CONSTRAINT poche_table_entries_saison_check CHECK (((saison = ANY (ARRAY['hiver'::text, 'printemps'::text, 'ete'::text, 'automne'::text])) OR (saison IS NULL))),
    CONSTRAINT poche_table_entries_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text]))),
    CONSTRAINT poche_table_entries_table_name_check CHECK ((table_name = ANY (ARRAY['fouille_ordinaire'::text, 'fouille_mondaine'::text, 'fouille_secrets'::text, 'fouille_horreur'::text, 'fouille_espionnage'::text, 'fouille_pulp'::text, 'fouille_saisonniere'::text]))),
    CONSTRAINT poche_table_entries_weight_check CHECK ((weight = ANY (ARRAY['extremement_rare'::text, 'rare'::text, 'peu_frequent'::text, 'frequent'::text, 'tres_frequent'::text]))),
    CONSTRAINT saisonniere_need_saison CHECK (((table_name <> 'fouille_saisonniere'::text) OR (saison IS NOT NULL)))
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    username text,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
    role text DEFAULT 'user'::text,
    badges text[] DEFAULT '{}'::text[],
    last_seen timestamp with time zone,
    show_pixie boolean DEFAULT true,
    active_badge text,
    dice_theme text DEFAULT 'laiton'::text,
    app_theme text DEFAULT 'light'::text,
    is_joueur boolean DEFAULT true,
    is_docte boolean DEFAULT false,
    unlocked_fairies uuid[] DEFAULT '{}'::uuid[],
    use_3d_dice boolean DEFAULT false,
    notify_telegraphe boolean DEFAULT true,
    unlocked_features text[] DEFAULT '{}'::text[],
    is_initiated boolean DEFAULT false
);


--
-- Name: profils; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profils (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name_masculine text NOT NULL,
    name_feminine text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    traits jsonb DEFAULT '[]'::jsonb,
    icon text DEFAULT '👤'::text
);


--
-- Name: TABLE profils; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.profils IS 'Les 6 profils de personnage (Aventurier, Combattant, etc.)';


--
-- Name: public_characters; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.public_characters WITH (security_invoker='true') AS
 SELECT id,
    nom,
    sexe,
    type_fee,
    anciennete,
    caracteristiques,
    created_at,
    updated_at
   FROM public.characters
  WHERE (is_public = true)
  ORDER BY updated_at DESC;


--
-- Name: VIEW public_characters; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON VIEW public.public_characters IS 'Liste des personnages publics avec informations de base';


--
-- Name: registre_forge; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.registre_forge (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id uuid,
    type_entree text NOT NULL,
    titre text NOT NULL,
    description text NOT NULL,
    version_constatee text,
    niveau_gravite text,
    benefice_creatif text,
    statut text NOT NULL,
    ordre integer DEFAULT 0,
    logs_techniques jsonb,
    capture_url text,
    is_masque boolean DEFAULT false,
    flag_persistance boolean DEFAULT false,
    votes jsonb DEFAULT '{"up": [], "down": []}'::jsonb,
    is_initie_only boolean DEFAULT false,
    reponse_officielle text,
    is_notified_pixie boolean DEFAULT false
);


--
-- Name: session_presents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.session_presents (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    session_id uuid NOT NULL,
    character_id uuid NOT NULL,
    present boolean DEFAULT true NOT NULL
);


--
-- Name: sessions_jeu; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions_jeu (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cercle_id uuid NOT NULL,
    titre text NOT NULL,
    date_partie date DEFAULT CURRENT_DATE NOT NULL,
    resume text,
    xp_distribue integer DEFAULT 0 NOT NULL,
    is_public boolean DEFAULT false NOT NULL,
    xp_auto boolean DEFAULT true NOT NULL,
    xp_scope text DEFAULT 'membres'::text NOT NULL,
    xp_attribue boolean DEFAULT false NOT NULL,
    created_by uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT sessions_jeu_xp_scope_check CHECK ((xp_scope = ANY (ARRAY['membres'::text, 'presents'::text])))
);


--
-- Name: social_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.social_items (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    profil_id uuid,
    categorie text NOT NULL,
    nom text NOT NULL,
    description text,
    cout numeric(3,1) DEFAULT 1.0 NOT NULL,
    cout_moderne numeric(3,1),
    fortune_score integer,
    fortune_bonus integer,
    conditions jsonb DEFAULT '{}'::jsonb,
    is_official boolean DEFAULT true NOT NULL,
    is_secondaire boolean DEFAULT false,
    requirements jsonb,
    effets_techniques jsonb,
    is_choix_multiple boolean DEFAULT false,
    profils_autorises jsonb DEFAULT '[]'::jsonb,
    CONSTRAINT social_items_categorie_check CHECK ((categorie = ANY (ARRAY['metier'::text, 'objet'::text, 'contact'::text, 'langue'::text, 'titre'::text])))
);


--
-- Name: sorts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sorts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nom text NOT NULL,
    magie text NOT NULL,
    niveau text NOT NULL,
    branche text,
    details jsonb DEFAULT '{}'::jsonb NOT NULL,
    is_official boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    cout_xp integer,
    CONSTRAINT sorts_niveau_check CHECK ((niveau = ANY (ARRAY['Novice'::text, 'Adepte'::text, 'Maître'::text, 'Grand Maître'::text])))
);


--
-- Name: specialites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.specialites (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    nom text NOT NULL,
    competence_id uuid NOT NULL,
    is_official boolean DEFAULT true NOT NULL,
    is_sealed boolean DEFAULT false NOT NULL
);


--
-- Name: support_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.support_messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    ticket_id uuid,
    user_id uuid,
    message text NOT NULL,
    is_admin boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: support_tickets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.support_tickets (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    sujet text NOT NULL,
    status text DEFAULT 'nouveau'::text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT support_tickets_status_check CHECK ((status = ANY (ARRAY['nouveau'::text, 'lu'::text, 'resolu'::text])))
);


--
-- Name: titres_honorifiques; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.titres_honorifiques (
    id text NOT NULL,
    label text NOT NULL,
    icon_name text DEFAULT 'Award'::text NOT NULL,
    color_classes text NOT NULL,
    description text
);


--
-- Name: tracas_table_entries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tracas_table_entries (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    table_name text NOT NULL,
    titre text NOT NULL,
    description text,
    exemple_key text,
    weight text DEFAULT 'frequent'::text NOT NULL,
    is_official boolean DEFAULT false NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    reject_reason text,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    approved_by uuid,
    approved_at timestamp with time zone,
    CONSTRAINT tracas_table_entries_exemple_key_check CHECK (((exemple_key = ANY (ARRAY['lettre_anonyme'::text, 'parent_eloigne'::text, 'facheur'::text, 'rumeur_journal'::text, 'erreur_livraison'::text, 'pli_officiel'::text, 'gamin_rue'::text])) OR (exemple_key IS NULL))),
    CONSTRAINT tracas_table_entries_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text]))),
    CONSTRAINT tracas_table_entries_table_name_check CHECK ((table_name = ANY (ARRAY['sante'::text, 'logistique'::text, 'social'::text, 'technologie'::text, 'ex_lettre_anonyme'::text, 'ex_parent_eloigne'::text, 'ex_facheur'::text, 'ex_rumeur_journal'::text, 'ex_erreur_livraison'::text, 'ex_pli_officiel'::text, 'ex_gamin_rue'::text]))),
    CONSTRAINT tracas_table_entries_weight_check CHECK ((weight = ANY (ARRAY['extremement_rare'::text, 'rare'::text, 'peu_frequent'::text, 'frequent'::text, 'tres_frequent'::text])))
);


--
-- Name: user_notification_preferences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_notification_preferences (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    subscribe_to_updates boolean DEFAULT false,
    notify_major_versions boolean DEFAULT true,
    notify_minor_versions boolean DEFAULT false,
    enable_push_notifications boolean DEFAULT false,
    push_notification_token text,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: TABLE user_notification_preferences; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.user_notification_preferences IS 'Préférences de notification des utilisateurs pour les mises à jour';


--
-- Name: xp_transactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.xp_transactions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    character_id uuid NOT NULL,
    type text NOT NULL,
    code text,
    label text NOT NULL,
    valeur integer NOT NULL,
    rang_final integer,
    date_mouvement timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT xp_transactions_type_check CHECK ((type = ANY (ARRAY['GAIN'::text, 'DEPENSE'::text, 'REMBOURSEMENT'::text]))),
    CONSTRAINT xp_transactions_valeur_check CHECK ((valeur >= 0))
);


--
-- Name: xp_summary; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.xp_summary WITH (security_invoker='true') AS
 SELECT character_id,
    sum(
        CASE
            WHEN (type = 'GAIN'::text) THEN valeur
            ELSE 0
        END) AS total_gain,
    sum(
        CASE
            WHEN (type = 'DEPENSE'::text) THEN valeur
            ELSE 0
        END) AS total_depense,
    sum(
        CASE
            WHEN (type = 'REMBOURSEMENT'::text) THEN valeur
            ELSE 0
        END) AS total_remboursement,
    sum(
        CASE
            WHEN (type = 'DEPENSE'::text) THEN valeur
            WHEN (type = 'REMBOURSEMENT'::text) THEN (- valeur)
            ELSE 0
        END) AS xp_depense_calcule,
    count(*) AS nb_transactions,
    max(date_mouvement) AS derniere_transaction
   FROM public.xp_transactions
  GROUP BY character_id;


--
-- Name: messages; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea
)
PARTITION BY RANGE (inserted_at);


--
-- Name: messages_2026_07_09; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_09 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_10; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_10 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_11; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_11 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_12; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_12 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_13; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_13 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_14; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_14 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: messages_2026_07_15; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.messages_2026_07_15 (
    topic text NOT NULL,
    extension text NOT NULL,
    payload jsonb,
    event text,
    private boolean DEFAULT false,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    inserted_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    binary_payload bytea,
    CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL)))
);


--
-- Name: schema_migrations; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.schema_migrations (
    version bigint NOT NULL,
    inserted_at timestamp(0) without time zone
);


--
-- Name: subscription; Type: TABLE; Schema: realtime; Owner: -
--

CREATE TABLE realtime.subscription (
    id bigint NOT NULL,
    subscription_id uuid NOT NULL,
    entity regclass NOT NULL,
    filters realtime.user_defined_filter[] DEFAULT '{}'::realtime.user_defined_filter[] NOT NULL,
    claims jsonb NOT NULL,
    claims_role regrole GENERATED ALWAYS AS (realtime.to_regrole((claims ->> 'role'::text))) STORED NOT NULL,
    created_at timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    action_filter text DEFAULT '*'::text,
    selected_columns text[],
    CONSTRAINT subscription_action_filter_check CHECK ((action_filter = ANY (ARRAY['*'::text, 'INSERT'::text, 'UPDATE'::text, 'DELETE'::text])))
);


--
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: realtime; Owner: -
--

ALTER TABLE realtime.subscription ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME realtime.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: buckets; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets (
    id text NOT NULL,
    name text NOT NULL,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    public boolean DEFAULT false,
    avif_autodetection boolean DEFAULT false,
    file_size_limit bigint,
    allowed_mime_types text[],
    owner_id text,
    type storage.buckettype DEFAULT 'STANDARD'::storage.buckettype NOT NULL
);


--
-- Name: COLUMN buckets.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.buckets.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: buckets_analytics; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets_analytics (
    name text NOT NULL,
    type storage.buckettype DEFAULT 'ANALYTICS'::storage.buckettype NOT NULL,
    format text DEFAULT 'ICEBERG'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    deleted_at timestamp with time zone
);


--
-- Name: buckets_vectors; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.buckets_vectors (
    id text NOT NULL,
    type storage.buckettype DEFAULT 'VECTOR'::storage.buckettype NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: migrations; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: objects; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.objects (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    bucket_id text,
    name text,
    owner uuid,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    last_accessed_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    path_tokens text[] GENERATED ALWAYS AS (string_to_array(name, '/'::text)) STORED,
    version text,
    owner_id text,
    user_metadata jsonb
);


--
-- Name: COLUMN objects.owner; Type: COMMENT; Schema: storage; Owner: -
--

COMMENT ON COLUMN storage.objects.owner IS 'Field is deprecated, use owner_id instead';


--
-- Name: s3_multipart_uploads; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads (
    id text NOT NULL,
    in_progress_size bigint DEFAULT 0 NOT NULL,
    upload_signature text NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    version text NOT NULL,
    owner_id text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_metadata jsonb,
    metadata jsonb
);


--
-- Name: s3_multipart_uploads_parts; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.s3_multipart_uploads_parts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    upload_id text NOT NULL,
    size bigint DEFAULT 0 NOT NULL,
    part_number integer NOT NULL,
    bucket_id text NOT NULL,
    key text NOT NULL COLLATE pg_catalog."C",
    etag text NOT NULL,
    owner_id text,
    version text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: vector_indexes; Type: TABLE; Schema: storage; Owner: -
--

CREATE TABLE storage.vector_indexes (
    id text DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL COLLATE pg_catalog."C",
    bucket_id text NOT NULL,
    data_type text NOT NULL,
    dimension integer NOT NULL,
    distance_metric text NOT NULL,
    metadata_configuration jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: messages_2026_07_09; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_09 FOR VALUES FROM ('2026-07-09 00:00:00') TO ('2026-07-10 00:00:00');


--
-- Name: messages_2026_07_10; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_10 FOR VALUES FROM ('2026-07-10 00:00:00') TO ('2026-07-11 00:00:00');


--
-- Name: messages_2026_07_11; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_11 FOR VALUES FROM ('2026-07-11 00:00:00') TO ('2026-07-12 00:00:00');


--
-- Name: messages_2026_07_12; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_12 FOR VALUES FROM ('2026-07-12 00:00:00') TO ('2026-07-13 00:00:00');


--
-- Name: messages_2026_07_13; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_13 FOR VALUES FROM ('2026-07-13 00:00:00') TO ('2026-07-14 00:00:00');


--
-- Name: messages_2026_07_14; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_14 FOR VALUES FROM ('2026-07-14 00:00:00') TO ('2026-07-15 00:00:00');


--
-- Name: messages_2026_07_15; Type: TABLE ATTACH; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages ATTACH PARTITION realtime.messages_2026_07_15 FOR VALUES FROM ('2026-07-15 00:00:00') TO ('2026-07-16 00:00:00');


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('auth.refresh_tokens_id_seq'::regclass);


--
-- Name: journal_articles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_articles ALTER COLUMN id SET DEFAULT nextval('public.journal_articles_id_seq'::regclass);


--
-- Name: journal_holidays id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_holidays ALTER COLUMN id SET DEFAULT nextval('public.journal_holidays_id_seq'::regclass);


--
-- Name: mfa_amr_claims amr_id_pk; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT amr_id_pk PRIMARY KEY (id);


--
-- Name: audit_log_entries audit_log_entries_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.audit_log_entries
    ADD CONSTRAINT audit_log_entries_pkey PRIMARY KEY (id);


--
-- Name: custom_oauth_providers custom_oauth_providers_identifier_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.custom_oauth_providers
    ADD CONSTRAINT custom_oauth_providers_identifier_key UNIQUE (identifier);


--
-- Name: custom_oauth_providers custom_oauth_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.custom_oauth_providers
    ADD CONSTRAINT custom_oauth_providers_pkey PRIMARY KEY (id);


--
-- Name: flow_state flow_state_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.flow_state
    ADD CONSTRAINT flow_state_pkey PRIMARY KEY (id);


--
-- Name: identities identities_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_pkey PRIMARY KEY (id);


--
-- Name: identities identities_provider_id_provider_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_provider_id_provider_unique UNIQUE (provider_id, provider);


--
-- Name: instances instances_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.instances
    ADD CONSTRAINT instances_pkey PRIMARY KEY (id);


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_authentication_method_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_authentication_method_pkey UNIQUE (session_id, authentication_method);


--
-- Name: mfa_challenges mfa_challenges_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_pkey PRIMARY KEY (id);


--
-- Name: mfa_factors mfa_factors_last_challenged_at_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_last_challenged_at_key UNIQUE (last_challenged_at);


--
-- Name: mfa_factors mfa_factors_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_pkey PRIMARY KEY (id);


--
-- Name: oauth_authorizations oauth_authorizations_authorization_code_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_authorization_code_key UNIQUE (authorization_code);


--
-- Name: oauth_authorizations oauth_authorizations_authorization_id_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_authorization_id_key UNIQUE (authorization_id);


--
-- Name: oauth_authorizations oauth_authorizations_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_pkey PRIMARY KEY (id);


--
-- Name: oauth_client_states oauth_client_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_client_states
    ADD CONSTRAINT oauth_client_states_pkey PRIMARY KEY (id);


--
-- Name: oauth_clients oauth_clients_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_clients
    ADD CONSTRAINT oauth_clients_pkey PRIMARY KEY (id);


--
-- Name: oauth_consents oauth_consents_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_pkey PRIMARY KEY (id);


--
-- Name: oauth_consents oauth_consents_user_client_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_user_client_unique UNIQUE (user_id, client_id);


--
-- Name: one_time_tokens one_time_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_unique; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_unique UNIQUE (token);


--
-- Name: saml_providers saml_providers_entity_id_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_entity_id_key UNIQUE (entity_id);


--
-- Name: saml_providers saml_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_pkey PRIMARY KEY (id);


--
-- Name: saml_relay_states saml_relay_states_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sso_domains sso_domains_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_pkey PRIMARY KEY (id);


--
-- Name: sso_providers sso_providers_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_providers
    ADD CONSTRAINT sso_providers_pkey PRIMARY KEY (id);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: webauthn_challenges webauthn_challenges_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.webauthn_challenges
    ADD CONSTRAINT webauthn_challenges_pkey PRIMARY KEY (id);


--
-- Name: webauthn_credentials webauthn_credentials_pkey; Type: CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.webauthn_credentials
    ADD CONSTRAINT webauthn_credentials_pkey PRIMARY KEY (id);


--
-- Name: admin_settings admin_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_settings
    ADD CONSTRAINT admin_settings_pkey PRIMARY KEY (id);


--
-- Name: admin_settings admin_settings_setting_key_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_settings
    ADD CONSTRAINT admin_settings_setting_key_key UNIQUE (setting_key);


--
-- Name: ambiance_table_entries ambiance_table_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ambiance_table_entries
    ADD CONSTRAINT ambiance_table_entries_pkey PRIMARY KEY (id);


--
-- Name: bug_reports bug_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bug_reports
    ADD CONSTRAINT bug_reports_pkey PRIMARY KEY (id);


--
-- Name: cercle_membres cercle_membres_cercle_id_user_id_character_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_membres
    ADD CONSTRAINT cercle_membres_cercle_id_user_id_character_id_key UNIQUE (cercle_id, user_id, character_id);


--
-- Name: cercle_membres cercle_membres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_membres
    ADD CONSTRAINT cercle_membres_pkey PRIMARY KEY (id);


--
-- Name: cercle_revelations cercle_revelations_cercle_id_item_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_revelations
    ADD CONSTRAINT cercle_revelations_cercle_id_item_id_key UNIQUE (cercle_id, item_id);


--
-- Name: cercle_revelations cercle_revelations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_revelations
    ADD CONSTRAINT cercle_revelations_pkey PRIMARY KEY (id);


--
-- Name: cercles cercles_code_invitation_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercles
    ADD CONSTRAINT cercles_code_invitation_key UNIQUE (code_invitation);


--
-- Name: cercles cercles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercles
    ADD CONSTRAINT cercles_pkey PRIMARY KEY (id);


--
-- Name: character_snapshots character_snapshots_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.character_snapshots
    ADD CONSTRAINT character_snapshots_pkey PRIMARY KEY (id);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- Name: chat_channels chat_channels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_channels
    ADD CONSTRAINT chat_channels_pkey PRIMARY KEY (id);


--
-- Name: chat_message_reads chat_message_reads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_message_reads
    ADD CONSTRAINT chat_message_reads_pkey PRIMARY KEY (message_id, user_id);


--
-- Name: chat_messages chat_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_pkey PRIMARY KEY (id);


--
-- Name: chroniques_heritiers chroniques_heritiers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chroniques_heritiers
    ADD CONSTRAINT chroniques_heritiers_pkey PRIMARY KEY (id);


--
-- Name: competences_futiles competences_futiles_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.competences_futiles
    ADD CONSTRAINT competences_futiles_name_key UNIQUE (name);


--
-- Name: competences_futiles competences_futiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.competences_futiles
    ADD CONSTRAINT competences_futiles_pkey PRIMARY KEY (id);


--
-- Name: competences competences_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.competences
    ADD CONSTRAINT competences_name_key UNIQUE (name);


--
-- Name: competences competences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.competences
    ADD CONSTRAINT competences_pkey PRIMARY KEY (id);


--
-- Name: data_change_requests data_change_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.data_change_requests
    ADD CONSTRAINT data_change_requests_pkey PRIMARY KEY (id);


--
-- Name: fairy_assets fairy_assets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_assets
    ADD CONSTRAINT fairy_assets_pkey PRIMARY KEY (id);


--
-- Name: fairy_capacites fairy_capacites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_capacites
    ADD CONSTRAINT fairy_capacites_pkey PRIMARY KEY (id);


--
-- Name: fairy_competences_futiles_predilection fairy_competences_futiles_predilection_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_futiles_predilection
    ADD CONSTRAINT fairy_competences_futiles_predilection_pkey PRIMARY KEY (id);


--
-- Name: fairy_competences_predilection fairy_competences_predilection_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_predilection
    ADD CONSTRAINT fairy_competences_predilection_pkey PRIMARY KEY (id);


--
-- Name: fairy_powers fairy_powers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_powers
    ADD CONSTRAINT fairy_powers_pkey PRIMARY KEY (id);


--
-- Name: fairy_type_assets fairy_type_assets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_assets
    ADD CONSTRAINT fairy_type_assets_pkey PRIMARY KEY (fairy_type_id, asset_id);


--
-- Name: fairy_type_capacites fairy_type_capacites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_capacites
    ADD CONSTRAINT fairy_type_capacites_pkey PRIMARY KEY (fairy_type_id, capacite_id);


--
-- Name: fairy_type_powers fairy_type_powers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_powers
    ADD CONSTRAINT fairy_type_powers_pkey PRIMARY KEY (fairy_type_id, power_id);


--
-- Name: fairy_types fairy_types_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_types
    ADD CONSTRAINT fairy_types_name_key UNIQUE (name);


--
-- Name: fairy_types fairy_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_types
    ADD CONSTRAINT fairy_types_pkey PRIMARY KEY (id);


--
-- Name: figures figures_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.figures
    ADD CONSTRAINT figures_pkey PRIMARY KEY (id);


--
-- Name: heritier_notes heritier_notes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.heritier_notes
    ADD CONSTRAINT heritier_notes_pkey PRIMARY KEY (id);


--
-- Name: historical_events historical_events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.historical_events
    ADD CONSTRAINT historical_events_pkey PRIMARY KEY (date);


--
-- Name: indices_verites indices_verites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.indices_verites
    ADD CONSTRAINT indices_verites_pkey PRIMARY KEY (id);


--
-- Name: itineraire_modes_perso itineraire_modes_perso_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itineraire_modes_perso
    ADD CONSTRAINT itineraire_modes_perso_pkey PRIMARY KEY (user_id);


--
-- Name: journal_articles journal_articles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_articles
    ADD CONSTRAINT journal_articles_pkey PRIMARY KEY (id);


--
-- Name: journal_daily_info journal_daily_info_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_daily_info
    ADD CONSTRAINT journal_daily_info_pkey PRIMARY KEY (date);


--
-- Name: journal_holidays journal_holidays_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_holidays
    ADD CONSTRAINT journal_holidays_pkey PRIMARY KEY (id);


--
-- Name: journal_repair_requests journal_repair_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_repair_requests
    ADD CONSTRAINT journal_repair_requests_pkey PRIMARY KEY (id);


--
-- Name: journal_votes journal_votes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_votes
    ADD CONSTRAINT journal_votes_pkey PRIMARY KEY (date);


--
-- Name: llm_usage_log llm_usage_log_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.llm_usage_log
    ADD CONSTRAINT llm_usage_log_pkey PRIMARY KEY (id);


--
-- Name: map_points map_points_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.map_points
    ADD CONSTRAINT map_points_pkey PRIMARY KEY (id);


--
-- Name: menu_plats menu_plats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_plats
    ADD CONSTRAINT menu_plats_pkey PRIMARY KEY (id);


--
-- Name: menu_sauvegardes menu_sauvegardes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_sauvegardes
    ADD CONSTRAINT menu_sauvegardes_pkey PRIMARY KEY (id);


--
-- Name: menu_structures menu_structures_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_structures
    ADD CONSTRAINT menu_structures_pkey PRIMARY KEY (id);


--
-- Name: notification_history notification_history_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notification_history
    ADD CONSTRAINT notification_history_pkey PRIMARY KEY (id);


--
-- Name: ombre_consequences ombre_consequences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ombre_consequences
    ADD CONSTRAINT ombre_consequences_pkey PRIMARY KEY (id);


--
-- Name: outil_usage outil_usage_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outil_usage
    ADD CONSTRAINT outil_usage_pkey PRIMARY KEY (id);


--
-- Name: pnj_table_entries pnj_table_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnj_table_entries
    ADD CONSTRAINT pnj_table_entries_pkey PRIMARY KEY (id);


--
-- Name: poche_table_entries poche_table_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poche_table_entries
    ADD CONSTRAINT poche_table_entries_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_username_key UNIQUE (username);


--
-- Name: profils profils_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profils
    ADD CONSTRAINT profils_pkey PRIMARY KEY (id);


--
-- Name: registre_forge registre_forge_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.registre_forge
    ADD CONSTRAINT registre_forge_pkey PRIMARY KEY (id);


--
-- Name: session_presents session_presents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session_presents
    ADD CONSTRAINT session_presents_pkey PRIMARY KEY (id);


--
-- Name: session_presents session_presents_session_id_character_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session_presents
    ADD CONSTRAINT session_presents_session_id_character_id_key UNIQUE (session_id, character_id);


--
-- Name: sessions_jeu sessions_jeu_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions_jeu
    ADD CONSTRAINT sessions_jeu_pkey PRIMARY KEY (id);


--
-- Name: social_items social_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.social_items
    ADD CONSTRAINT social_items_pkey PRIMARY KEY (id);


--
-- Name: sorts sorts_nom_magie_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sorts
    ADD CONSTRAINT sorts_nom_magie_key UNIQUE (nom, magie);


--
-- Name: sorts sorts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sorts
    ADD CONSTRAINT sorts_pkey PRIMARY KEY (id);


--
-- Name: specialites specialites_competence_id_nom_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.specialites
    ADD CONSTRAINT specialites_competence_id_nom_key UNIQUE (competence_id, nom);


--
-- Name: specialites specialites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.specialites
    ADD CONSTRAINT specialites_pkey PRIMARY KEY (id);


--
-- Name: support_messages support_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support_messages
    ADD CONSTRAINT support_messages_pkey PRIMARY KEY (id);


--
-- Name: support_tickets support_tickets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support_tickets
    ADD CONSTRAINT support_tickets_pkey PRIMARY KEY (id);


--
-- Name: titres_honorifiques titres_honorifiques_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.titres_honorifiques
    ADD CONSTRAINT titres_honorifiques_pkey PRIMARY KEY (id);


--
-- Name: tracas_table_entries tracas_table_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tracas_table_entries
    ADD CONSTRAINT tracas_table_entries_pkey PRIMARY KEY (id);


--
-- Name: journal_articles unique_date_article_index; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_articles
    ADD CONSTRAINT unique_date_article_index UNIQUE (date, article_index);


--
-- Name: user_notification_preferences user_notification_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_notification_preferences
    ADD CONSTRAINT user_notification_preferences_pkey PRIMARY KEY (id);


--
-- Name: user_notification_preferences user_notification_preferences_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_notification_preferences
    ADD CONSTRAINT user_notification_preferences_user_id_key UNIQUE (user_id);


--
-- Name: xp_transactions xp_transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.xp_transactions
    ADD CONSTRAINT xp_transactions_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_09 messages_2026_07_09_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_09
    ADD CONSTRAINT messages_2026_07_09_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_10 messages_2026_07_10_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_10
    ADD CONSTRAINT messages_2026_07_10_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_11 messages_2026_07_11_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_11
    ADD CONSTRAINT messages_2026_07_11_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_12 messages_2026_07_12_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_12
    ADD CONSTRAINT messages_2026_07_12_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_13 messages_2026_07_13_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_13
    ADD CONSTRAINT messages_2026_07_13_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_14 messages_2026_07_14_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_14
    ADD CONSTRAINT messages_2026_07_14_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages_2026_07_15 messages_2026_07_15_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.messages_2026_07_15
    ADD CONSTRAINT messages_2026_07_15_pkey PRIMARY KEY (id, inserted_at);


--
-- Name: messages messages_payload_exclusive; Type: CHECK CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE realtime.messages
    ADD CONSTRAINT messages_payload_exclusive CHECK (((payload IS NULL) OR (binary_payload IS NULL))) NOT VALID;


--
-- Name: subscription pk_subscription; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.subscription
    ADD CONSTRAINT pk_subscription PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: realtime; Owner: -
--

ALTER TABLE ONLY realtime.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: buckets_analytics buckets_analytics_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets_analytics
    ADD CONSTRAINT buckets_analytics_pkey PRIMARY KEY (id);


--
-- Name: buckets buckets_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets
    ADD CONSTRAINT buckets_pkey PRIMARY KEY (id);


--
-- Name: buckets_vectors buckets_vectors_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.buckets_vectors
    ADD CONSTRAINT buckets_vectors_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_name_key; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: objects objects_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_pkey PRIMARY KEY (id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_pkey PRIMARY KEY (id);


--
-- Name: vector_indexes vector_indexes_pkey; Type: CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.vector_indexes
    ADD CONSTRAINT vector_indexes_pkey PRIMARY KEY (id);


--
-- Name: audit_logs_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX audit_logs_instance_id_idx ON auth.audit_log_entries USING btree (instance_id);


--
-- Name: confirmation_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING btree (confirmation_token) WHERE ((confirmation_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: custom_oauth_providers_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX custom_oauth_providers_created_at_idx ON auth.custom_oauth_providers USING btree (created_at);


--
-- Name: custom_oauth_providers_enabled_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX custom_oauth_providers_enabled_idx ON auth.custom_oauth_providers USING btree (enabled);


--
-- Name: custom_oauth_providers_identifier_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX custom_oauth_providers_identifier_idx ON auth.custom_oauth_providers USING btree (identifier);


--
-- Name: custom_oauth_providers_provider_type_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX custom_oauth_providers_provider_type_idx ON auth.custom_oauth_providers USING btree (provider_type);


--
-- Name: email_change_token_current_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING btree (email_change_token_current) WHERE ((email_change_token_current)::text !~ '^[0-9 ]*$'::text);


--
-- Name: email_change_token_new_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING btree (email_change_token_new) WHERE ((email_change_token_new)::text !~ '^[0-9 ]*$'::text);


--
-- Name: factor_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX factor_id_created_at_idx ON auth.mfa_factors USING btree (user_id, created_at);


--
-- Name: flow_state_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC);


--
-- Name: identities_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_email_idx ON auth.identities USING btree (email text_pattern_ops);


--
-- Name: INDEX identities_email_idx; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.identities_email_idx IS 'Auth: Ensures indexed queries on the email column';


--
-- Name: identities_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX identities_user_id_idx ON auth.identities USING btree (user_id);


--
-- Name: idx_auth_code; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_auth_code ON auth.flow_state USING btree (auth_code);


--
-- Name: idx_oauth_client_states_created_at; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_oauth_client_states_created_at ON auth.oauth_client_states USING btree (created_at);


--
-- Name: idx_user_id_auth_method; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_user_id_auth_method ON auth.flow_state USING btree (user_id, authentication_method);


--
-- Name: idx_users_created_at_desc; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_users_created_at_desc ON auth.users USING btree (created_at DESC);


--
-- Name: idx_users_email; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_users_email ON auth.users USING btree (email);


--
-- Name: idx_users_last_sign_in_at_desc; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_users_last_sign_in_at_desc ON auth.users USING btree (last_sign_in_at DESC);


--
-- Name: idx_users_name; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX idx_users_name ON auth.users USING btree (((raw_user_meta_data ->> 'name'::text))) WHERE ((raw_user_meta_data ->> 'name'::text) IS NOT NULL);


--
-- Name: mfa_challenge_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_challenge_created_at_idx ON auth.mfa_challenges USING btree (created_at DESC);


--
-- Name: mfa_factors_user_friendly_name_unique; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX mfa_factors_user_friendly_name_unique ON auth.mfa_factors USING btree (friendly_name, user_id) WHERE (TRIM(BOTH FROM friendly_name) <> ''::text);


--
-- Name: mfa_factors_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX mfa_factors_user_id_idx ON auth.mfa_factors USING btree (user_id);


--
-- Name: oauth_auth_pending_exp_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_auth_pending_exp_idx ON auth.oauth_authorizations USING btree (expires_at) WHERE (status = 'pending'::auth.oauth_authorization_status);


--
-- Name: oauth_clients_deleted_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_clients_deleted_at_idx ON auth.oauth_clients USING btree (deleted_at);


--
-- Name: oauth_consents_active_client_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_active_client_idx ON auth.oauth_consents USING btree (client_id) WHERE (revoked_at IS NULL);


--
-- Name: oauth_consents_active_user_client_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_active_user_client_idx ON auth.oauth_consents USING btree (user_id, client_id) WHERE (revoked_at IS NULL);


--
-- Name: oauth_consents_user_order_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX oauth_consents_user_order_idx ON auth.oauth_consents USING btree (user_id, granted_at DESC);


--
-- Name: one_time_tokens_relates_to_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_relates_to_hash_idx ON auth.one_time_tokens USING hash (relates_to);


--
-- Name: one_time_tokens_token_hash_hash_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX one_time_tokens_token_hash_hash_idx ON auth.one_time_tokens USING hash (token_hash);


--
-- Name: one_time_tokens_user_id_token_type_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX one_time_tokens_user_id_token_type_key ON auth.one_time_tokens USING btree (user_id, token_type);


--
-- Name: reauthentication_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING btree (reauthentication_token) WHERE ((reauthentication_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: recovery_token_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING btree (recovery_token) WHERE ((recovery_token)::text !~ '^[0-9 ]*$'::text);


--
-- Name: refresh_tokens_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_idx ON auth.refresh_tokens USING btree (instance_id);


--
-- Name: refresh_tokens_instance_id_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_instance_id_user_id_idx ON auth.refresh_tokens USING btree (instance_id, user_id);


--
-- Name: refresh_tokens_parent_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_parent_idx ON auth.refresh_tokens USING btree (parent);


--
-- Name: refresh_tokens_session_id_revoked_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_session_id_revoked_idx ON auth.refresh_tokens USING btree (session_id, revoked);


--
-- Name: refresh_tokens_updated_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC);


--
-- Name: saml_providers_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_providers_sso_provider_id_idx ON auth.saml_providers USING btree (sso_provider_id);


--
-- Name: saml_relay_states_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC);


--
-- Name: saml_relay_states_for_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_for_email_idx ON auth.saml_relay_states USING btree (for_email);


--
-- Name: saml_relay_states_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX saml_relay_states_sso_provider_id_idx ON auth.saml_relay_states USING btree (sso_provider_id);


--
-- Name: sessions_not_after_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC);


--
-- Name: sessions_oauth_client_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_oauth_client_id_idx ON auth.sessions USING btree (oauth_client_id);


--
-- Name: sessions_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sessions_user_id_idx ON auth.sessions USING btree (user_id);


--
-- Name: sso_domains_domain_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain));


--
-- Name: sso_domains_sso_provider_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sso_domains_sso_provider_id_idx ON auth.sso_domains USING btree (sso_provider_id);


--
-- Name: sso_providers_resource_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id));


--
-- Name: sso_providers_resource_id_pattern_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX sso_providers_resource_id_pattern_idx ON auth.sso_providers USING btree (resource_id text_pattern_ops);


--
-- Name: unique_phone_factor_per_user; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX unique_phone_factor_per_user ON auth.mfa_factors USING btree (user_id, phone);


--
-- Name: user_id_created_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX user_id_created_at_idx ON auth.sessions USING btree (user_id, created_at);


--
-- Name: users_email_partial_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING btree (email) WHERE (is_sso_user = false);


--
-- Name: INDEX users_email_partial_key; Type: COMMENT; Schema: auth; Owner: -
--

COMMENT ON INDEX auth.users_email_partial_key IS 'Auth: A partial unique index that applies only when is_sso_user is false';


--
-- Name: users_instance_id_email_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text));


--
-- Name: users_instance_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_instance_id_idx ON auth.users USING btree (instance_id);


--
-- Name: users_is_anonymous_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX users_is_anonymous_idx ON auth.users USING btree (is_anonymous);


--
-- Name: webauthn_challenges_expires_at_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX webauthn_challenges_expires_at_idx ON auth.webauthn_challenges USING btree (expires_at);


--
-- Name: webauthn_challenges_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX webauthn_challenges_user_id_idx ON auth.webauthn_challenges USING btree (user_id);


--
-- Name: webauthn_credentials_credential_id_key; Type: INDEX; Schema: auth; Owner: -
--

CREATE UNIQUE INDEX webauthn_credentials_credential_id_key ON auth.webauthn_credentials USING btree (credential_id);


--
-- Name: webauthn_credentials_user_id_idx; Type: INDEX; Schema: auth; Owner: -
--

CREATE INDEX webauthn_credentials_user_id_idx ON auth.webauthn_credentials USING btree (user_id);


--
-- Name: idx_admin_settings_key; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_admin_settings_key ON public.admin_settings USING btree (setting_key);


--
-- Name: idx_ambiance_entries_creator; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ambiance_entries_creator ON public.ambiance_table_entries USING btree (created_by);


--
-- Name: idx_ambiance_entries_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ambiance_entries_status ON public.ambiance_table_entries USING btree (status);


--
-- Name: idx_ambiance_entries_table_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ambiance_entries_table_status ON public.ambiance_table_entries USING btree (table_name, variante, status);


--
-- Name: idx_cercle_membres_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_cercle_membres_unique ON public.cercle_membres USING btree (cercle_id, user_id);


--
-- Name: idx_characters_caracteristiques; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_caracteristiques ON public.characters USING gin (caracteristiques);


--
-- Name: idx_characters_competences_libres; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_competences_libres ON public.characters USING gin (competences_libres);


--
-- Name: idx_characters_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_created_at ON public.characters USING btree (created_at DESC);


--
-- Name: idx_characters_data; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_data ON public.characters USING gin (data);


--
-- Name: idx_characters_is_public; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_is_public ON public.characters USING btree (is_public) WHERE (is_public = true);


--
-- Name: idx_characters_statut; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_statut ON public.characters USING btree (statut);


--
-- Name: idx_characters_type_fee; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_type_fee ON public.characters USING btree (type_fee);


--
-- Name: idx_characters_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_characters_user_id ON public.characters USING btree (user_id);


--
-- Name: idx_cmr_message_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_cmr_message_id ON public.chat_message_reads USING btree (message_id);


--
-- Name: idx_cmr_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_cmr_user_id ON public.chat_message_reads USING btree (user_id);


--
-- Name: idx_competences_futiles_description; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_competences_futiles_description ON public.competences_futiles USING gin (to_tsvector('french'::regconfig, description));


--
-- Name: idx_competences_futiles_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_competences_futiles_name ON public.competences_futiles USING btree (name);


--
-- Name: idx_competences_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_competences_name ON public.competences USING btree (name);


--
-- Name: idx_competences_profil; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_competences_profil ON public.competences USING btree (profil_id);


--
-- Name: idx_data_requests_created; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_data_requests_created ON public.data_change_requests USING btree (created_at DESC);


--
-- Name: idx_data_requests_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_data_requests_status ON public.data_change_requests USING btree (status);


--
-- Name: idx_data_requests_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_data_requests_user ON public.data_change_requests USING btree (user_id);


--
-- Name: idx_fairy_comp_fut_fairy; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_fairy_comp_fut_fairy ON public.fairy_competences_futiles_predilection USING btree (fairy_type_id);


--
-- Name: idx_fairy_comp_fut_pred_comp_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_fairy_comp_fut_pred_comp_id ON public.fairy_competences_futiles_predilection USING btree (competence_futile_id);


--
-- Name: idx_fairy_comp_pred_fairy_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_fairy_comp_pred_fairy_type ON public.fairy_competences_predilection USING btree (fairy_type_id);


--
-- Name: idx_fairy_types_era; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_fairy_types_era ON public.fairy_types USING btree (era);


--
-- Name: idx_fairy_types_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_fairy_types_name ON public.fairy_types USING btree (name);


--
-- Name: idx_ftc_capacite_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ftc_capacite_id ON public.fairy_type_capacites USING btree (capacite_id);


--
-- Name: idx_ftc_fairy_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ftc_fairy_id ON public.fairy_type_capacites USING btree (fairy_type_id);


--
-- Name: idx_ftp_fairy_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ftp_fairy_id ON public.fairy_type_powers USING btree (fairy_type_id);


--
-- Name: idx_ftp_power_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_ftp_power_id ON public.fairy_type_powers USING btree (power_id);


--
-- Name: idx_llm_usage_log_call_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_llm_usage_log_call_type ON public.llm_usage_log USING btree (call_type);


--
-- Name: idx_llm_usage_log_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_llm_usage_log_created_at ON public.llm_usage_log USING btree (created_at);


--
-- Name: idx_menu_plats_categorie; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menu_plats_categorie ON public.menu_plats USING btree (categorie);


--
-- Name: idx_menu_plats_created_by; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menu_plats_created_by ON public.menu_plats USING btree (created_by);


--
-- Name: idx_menu_plats_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menu_plats_status ON public.menu_plats USING btree (status);


--
-- Name: idx_menu_sauvegardes_utilisateur; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menu_sauvegardes_utilisateur ON public.menu_sauvegardes USING btree (utilisateur_id);


--
-- Name: idx_menu_structures_lookup; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_menu_structures_lookup ON public.menu_structures USING btree (type_repas, niveau_financier, tranche_convives);


--
-- Name: idx_notif_history_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_notif_history_user ON public.notification_history USING btree (user_id);


--
-- Name: idx_notif_history_version; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_notif_history_version ON public.notification_history USING btree (version);


--
-- Name: idx_notif_prefs_subscribe; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_notif_prefs_subscribe ON public.user_notification_preferences USING btree (subscribe_to_updates);


--
-- Name: idx_notif_prefs_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_notif_prefs_user ON public.user_notification_preferences USING btree (user_id);


--
-- Name: idx_outil_usage_outil; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_outil_usage_outil ON public.outil_usage USING btree (outil, created_at);


--
-- Name: idx_outil_usage_user; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_outil_usage_user ON public.outil_usage USING btree (user_id, created_at);


--
-- Name: idx_pnj_entries_creator; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_pnj_entries_creator ON public.pnj_table_entries USING btree (created_by);


--
-- Name: idx_pnj_entries_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_pnj_entries_status ON public.pnj_table_entries USING btree (status);


--
-- Name: idx_pnj_entries_table_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_pnj_entries_table_status ON public.pnj_table_entries USING btree (table_name, tranche_age, status);


--
-- Name: idx_poche_entries_creator; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_poche_entries_creator ON public.poche_table_entries USING btree (created_by);


--
-- Name: idx_poche_entries_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_poche_entries_status ON public.poche_table_entries USING btree (status);


--
-- Name: idx_poche_entries_table_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_poche_entries_table_status ON public.poche_table_entries USING btree (table_name, saison, status);


--
-- Name: idx_profils_feminine; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_profils_feminine ON public.profils USING btree (name_feminine);


--
-- Name: idx_profils_masculine; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX idx_profils_masculine ON public.profils USING btree (name_masculine);


--
-- Name: idx_social_items_categorie; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_social_items_categorie ON public.social_items USING btree (categorie);


--
-- Name: idx_social_items_profil; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_social_items_profil ON public.social_items USING btree (profil_id);


--
-- Name: idx_specialites_competence_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_specialites_competence_id ON public.specialites USING btree (competence_id);


--
-- Name: idx_specialites_nom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_specialites_nom ON public.specialites USING btree (nom);


--
-- Name: idx_tracas_entries_creator; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_tracas_entries_creator ON public.tracas_table_entries USING btree (created_by);


--
-- Name: idx_tracas_entries_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_tracas_entries_status ON public.tracas_table_entries USING btree (status);


--
-- Name: idx_tracas_entries_table_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_tracas_entries_table_status ON public.tracas_table_entries USING btree (table_name, status);


--
-- Name: idx_xp_tx_character_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_xp_tx_character_id ON public.xp_transactions USING btree (character_id);


--
-- Name: idx_xp_tx_code; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_xp_tx_code ON public.xp_transactions USING btree (code) WHERE (code IS NOT NULL);


--
-- Name: idx_xp_tx_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_xp_tx_date ON public.xp_transactions USING btree (character_id, date_mouvement DESC);


--
-- Name: ix_realtime_subscription_entity; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX ix_realtime_subscription_entity ON realtime.subscription USING btree (entity);


--
-- Name: messages_inserted_at_topic_index; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_inserted_at_topic_index ON ONLY realtime.messages USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_09_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_09_inserted_at_topic_idx ON realtime.messages_2026_07_09 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_10_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_10_inserted_at_topic_idx ON realtime.messages_2026_07_10 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_11_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_11_inserted_at_topic_idx ON realtime.messages_2026_07_11 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_12_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_12_inserted_at_topic_idx ON realtime.messages_2026_07_12 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_13_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_13_inserted_at_topic_idx ON realtime.messages_2026_07_13 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_14_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_14_inserted_at_topic_idx ON realtime.messages_2026_07_14 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: messages_2026_07_15_inserted_at_topic_idx; Type: INDEX; Schema: realtime; Owner: -
--

CREATE INDEX messages_2026_07_15_inserted_at_topic_idx ON realtime.messages_2026_07_15 USING btree (inserted_at DESC, topic) WHERE ((extension = 'broadcast'::text) AND (private IS TRUE));


--
-- Name: subscription_subscription_id_entity_filters_action_filter_selec; Type: INDEX; Schema: realtime; Owner: -
--

CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_action_filter_selec ON realtime.subscription USING btree (subscription_id, entity, filters, action_filter, COALESCE(selected_columns, '{}'::text[]));


--
-- Name: bname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bname ON storage.buckets USING btree (name);


--
-- Name: bucketid_objname; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX bucketid_objname ON storage.objects USING btree (bucket_id, name);


--
-- Name: buckets_analytics_unique_name_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX buckets_analytics_unique_name_idx ON storage.buckets_analytics USING btree (name) WHERE (deleted_at IS NULL);


--
-- Name: idx_multipart_uploads_list; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_multipart_uploads_list ON storage.s3_multipart_uploads USING btree (bucket_id, key, created_at);


--
-- Name: idx_objects_bucket_id_name; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_bucket_id_name ON storage.objects USING btree (bucket_id, name COLLATE "C");


--
-- Name: idx_objects_bucket_id_name_lower; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX idx_objects_bucket_id_name_lower ON storage.objects USING btree (bucket_id, lower(name) COLLATE "C");


--
-- Name: name_prefix_search; Type: INDEX; Schema: storage; Owner: -
--

CREATE INDEX name_prefix_search ON storage.objects USING btree (name text_pattern_ops);


--
-- Name: vector_indexes_name_bucket_id_idx; Type: INDEX; Schema: storage; Owner: -
--

CREATE UNIQUE INDEX vector_indexes_name_bucket_id_idx ON storage.vector_indexes USING btree (name, bucket_id);


--
-- Name: messages_2026_07_09_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_09_inserted_at_topic_idx;


--
-- Name: messages_2026_07_09_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_09_pkey;


--
-- Name: messages_2026_07_10_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_10_inserted_at_topic_idx;


--
-- Name: messages_2026_07_10_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_10_pkey;


--
-- Name: messages_2026_07_11_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_11_inserted_at_topic_idx;


--
-- Name: messages_2026_07_11_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_11_pkey;


--
-- Name: messages_2026_07_12_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_12_inserted_at_topic_idx;


--
-- Name: messages_2026_07_12_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_12_pkey;


--
-- Name: messages_2026_07_13_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_13_inserted_at_topic_idx;


--
-- Name: messages_2026_07_13_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_13_pkey;


--
-- Name: messages_2026_07_14_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_14_inserted_at_topic_idx;


--
-- Name: messages_2026_07_14_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_14_pkey;


--
-- Name: messages_2026_07_15_inserted_at_topic_idx; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_inserted_at_topic_index ATTACH PARTITION realtime.messages_2026_07_15_inserted_at_topic_idx;


--
-- Name: messages_2026_07_15_pkey; Type: INDEX ATTACH; Schema: realtime; Owner: -
--

ALTER INDEX realtime.messages_pkey ATTACH PARTITION realtime.messages_2026_07_15_pkey;


--
-- Name: admin_settings admin_settings_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER admin_settings_updated_at BEFORE UPDATE ON public.admin_settings FOR EACH ROW EXECUTE FUNCTION public.update_admin_settings_updated_at();


--
-- Name: user_notification_preferences notification_prefs_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER notification_prefs_updated_at BEFORE UPDATE ON public.user_notification_preferences FOR EACH ROW EXECUTE FUNCTION public.update_notification_prefs_updated_at();


--
-- Name: characters set_timestamp; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER set_timestamp BEFORE UPDATE ON public.characters FOR EACH ROW EXECUTE FUNCTION public.trigger_set_timestamp();


--
-- Name: competences tg_competences_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER tg_competences_updated_at BEFORE UPDATE ON public.competences FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: data_change_requests tg_dcr_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER tg_dcr_updated_at BEFORE UPDATE ON public.data_change_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: fairy_types tg_fairy_types_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER tg_fairy_types_updated_at BEFORE UPDATE ON public.fairy_types FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: profils tg_profils_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER tg_profils_updated_at BEFORE UPDATE ON public.profils FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: support_tickets update_support_tickets_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON public.support_tickets FOR EACH ROW EXECUTE FUNCTION public.trigger_set_timestamp();


--
-- Name: subscription tr_check_filters; Type: TRIGGER; Schema: realtime; Owner: -
--

CREATE TRIGGER tr_check_filters BEFORE INSERT OR UPDATE ON realtime.subscription FOR EACH ROW EXECUTE FUNCTION realtime.subscription_check_filters();


--
-- Name: buckets enforce_bucket_name_length_trigger; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER enforce_bucket_name_length_trigger BEFORE INSERT OR UPDATE OF name ON storage.buckets FOR EACH ROW EXECUTE FUNCTION storage.enforce_bucket_name_length();


--
-- Name: buckets protect_buckets_delete; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER protect_buckets_delete BEFORE DELETE ON storage.buckets FOR EACH STATEMENT EXECUTE FUNCTION storage.protect_delete();


--
-- Name: objects protect_objects_delete; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER protect_objects_delete BEFORE DELETE ON storage.objects FOR EACH STATEMENT EXECUTE FUNCTION storage.protect_delete();


--
-- Name: objects update_objects_updated_at; Type: TRIGGER; Schema: storage; Owner: -
--

CREATE TRIGGER update_objects_updated_at BEFORE UPDATE ON storage.objects FOR EACH ROW EXECUTE FUNCTION storage.update_updated_at_column();


--
-- Name: identities identities_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.identities
    ADD CONSTRAINT identities_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: mfa_amr_claims mfa_amr_claims_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_amr_claims
    ADD CONSTRAINT mfa_amr_claims_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: mfa_challenges mfa_challenges_auth_factor_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_challenges
    ADD CONSTRAINT mfa_challenges_auth_factor_id_fkey FOREIGN KEY (factor_id) REFERENCES auth.mfa_factors(id) ON DELETE CASCADE;


--
-- Name: mfa_factors mfa_factors_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.mfa_factors
    ADD CONSTRAINT mfa_factors_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: oauth_authorizations oauth_authorizations_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_client_id_fkey FOREIGN KEY (client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: oauth_authorizations oauth_authorizations_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_authorizations
    ADD CONSTRAINT oauth_authorizations_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: oauth_consents oauth_consents_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_client_id_fkey FOREIGN KEY (client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: oauth_consents oauth_consents_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.oauth_consents
    ADD CONSTRAINT oauth_consents_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: one_time_tokens one_time_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.one_time_tokens
    ADD CONSTRAINT one_time_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: refresh_tokens refresh_tokens_session_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_session_id_fkey FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE;


--
-- Name: saml_providers saml_providers_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_providers
    ADD CONSTRAINT saml_providers_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_flow_state_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_flow_state_id_fkey FOREIGN KEY (flow_state_id) REFERENCES auth.flow_state(id) ON DELETE CASCADE;


--
-- Name: saml_relay_states saml_relay_states_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.saml_relay_states
    ADD CONSTRAINT saml_relay_states_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_oauth_client_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_oauth_client_id_fkey FOREIGN KEY (oauth_client_id) REFERENCES auth.oauth_clients(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: sso_domains sso_domains_sso_provider_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.sso_domains
    ADD CONSTRAINT sso_domains_sso_provider_id_fkey FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE;


--
-- Name: webauthn_challenges webauthn_challenges_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.webauthn_challenges
    ADD CONSTRAINT webauthn_challenges_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: webauthn_credentials webauthn_credentials_user_id_fkey; Type: FK CONSTRAINT; Schema: auth; Owner: -
--

ALTER TABLE ONLY auth.webauthn_credentials
    ADD CONSTRAINT webauthn_credentials_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: admin_settings admin_settings_updated_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_settings
    ADD CONSTRAINT admin_settings_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES auth.users(id);


--
-- Name: ambiance_table_entries ambiance_table_entries_approved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ambiance_table_entries
    ADD CONSTRAINT ambiance_table_entries_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: ambiance_table_entries ambiance_table_entries_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ambiance_table_entries
    ADD CONSTRAINT ambiance_table_entries_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: bug_reports bug_reports_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bug_reports
    ADD CONSTRAINT bug_reports_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: cercle_membres cercle_membres_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_membres
    ADD CONSTRAINT cercle_membres_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE CASCADE;


--
-- Name: cercle_membres cercle_membres_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_membres
    ADD CONSTRAINT cercle_membres_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: cercle_membres cercle_membres_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_membres
    ADD CONSTRAINT cercle_membres_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: cercle_revelations cercle_revelations_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_revelations
    ADD CONSTRAINT cercle_revelations_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE CASCADE;


--
-- Name: cercle_revelations cercle_revelations_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_revelations
    ADD CONSTRAINT cercle_revelations_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.indices_verites(id) ON DELETE CASCADE;


--
-- Name: cercle_revelations cercle_revelations_revealed_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercle_revelations
    ADD CONSTRAINT cercle_revelations_revealed_by_fkey FOREIGN KEY (revealed_by) REFERENCES public.profiles(id);


--
-- Name: cercles cercles_docte_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cercles
    ADD CONSTRAINT cercles_docte_id_fkey FOREIGN KEY (docte_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: character_snapshots character_snapshots_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.character_snapshots
    ADD CONSTRAINT character_snapshots_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: character_snapshots character_snapshots_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.character_snapshots
    ADD CONSTRAINT character_snapshots_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: characters characters_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: chat_channels chat_channels_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_channels
    ADD CONSTRAINT chat_channels_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE CASCADE;


--
-- Name: chat_channels chat_channels_participant_1_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_channels
    ADD CONSTRAINT chat_channels_participant_1_fkey FOREIGN KEY (participant_1) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: chat_channels chat_channels_participant_2_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_channels
    ADD CONSTRAINT chat_channels_participant_2_fkey FOREIGN KEY (participant_2) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: chat_messages chat_messages_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.chat_channels(id) ON DELETE CASCADE;


--
-- Name: chat_messages chat_messages_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: chroniques_heritiers chroniques_heritiers_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chroniques_heritiers
    ADD CONSTRAINT chroniques_heritiers_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: chroniques_heritiers chroniques_heritiers_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chroniques_heritiers
    ADD CONSTRAINT chroniques_heritiers_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);


--
-- Name: chroniques_heritiers chroniques_heritiers_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chroniques_heritiers
    ADD CONSTRAINT chroniques_heritiers_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.sessions_jeu(id) ON DELETE SET NULL;


--
-- Name: competences competences_profil_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.competences
    ADD CONSTRAINT competences_profil_id_fkey FOREIGN KEY (profil_id) REFERENCES public.profils(id) ON DELETE SET NULL;


--
-- Name: data_change_requests data_change_requests_approved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.data_change_requests
    ADD CONSTRAINT data_change_requests_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id);


--
-- Name: data_change_requests data_change_requests_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.data_change_requests
    ADD CONSTRAINT data_change_requests_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id);


--
-- Name: fairy_competences_futiles_predilection fairy_competences_futiles_predilectio_competence_futile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_futiles_predilection
    ADD CONSTRAINT fairy_competences_futiles_predilectio_competence_futile_id_fkey FOREIGN KEY (competence_futile_id) REFERENCES public.competences_futiles(id) ON DELETE CASCADE;


--
-- Name: fairy_competences_futiles_predilection fairy_competences_futiles_predilection_fairy_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_futiles_predilection
    ADD CONSTRAINT fairy_competences_futiles_predilection_fairy_type_id_fkey FOREIGN KEY (fairy_type_id) REFERENCES public.fairy_types(id) ON DELETE CASCADE;


--
-- Name: fairy_competences_predilection fairy_competences_predilection_competence_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_predilection
    ADD CONSTRAINT fairy_competences_predilection_competence_id_fkey FOREIGN KEY (competence_id) REFERENCES public.competences(id) ON DELETE SET NULL;


--
-- Name: fairy_competences_predilection fairy_competences_predilection_fairy_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_competences_predilection
    ADD CONSTRAINT fairy_competences_predilection_fairy_type_id_fkey FOREIGN KEY (fairy_type_id) REFERENCES public.fairy_types(id) ON DELETE CASCADE;


--
-- Name: fairy_type_assets fairy_type_assets_asset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_assets
    ADD CONSTRAINT fairy_type_assets_asset_id_fkey FOREIGN KEY (asset_id) REFERENCES public.fairy_assets(id) ON DELETE CASCADE;


--
-- Name: fairy_type_assets fairy_type_assets_fairy_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_assets
    ADD CONSTRAINT fairy_type_assets_fairy_type_id_fkey FOREIGN KEY (fairy_type_id) REFERENCES public.fairy_types(id) ON DELETE CASCADE;


--
-- Name: characters fk_characters_profiles; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT fk_characters_profiles FOREIGN KEY (user_id) REFERENCES public.profiles(id);


--
-- Name: chat_message_reads fk_cmr_message; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_message_reads
    ADD CONSTRAINT fk_cmr_message FOREIGN KEY (message_id) REFERENCES public.chat_messages(id) ON DELETE CASCADE;


--
-- Name: chat_message_reads fk_cmr_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chat_message_reads
    ADD CONSTRAINT fk_cmr_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: fairy_type_capacites fk_ftc_capacite; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_capacites
    ADD CONSTRAINT fk_ftc_capacite FOREIGN KEY (capacite_id) REFERENCES public.fairy_capacites(id) ON DELETE CASCADE;


--
-- Name: fairy_type_capacites fk_ftc_fairy; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_capacites
    ADD CONSTRAINT fk_ftc_fairy FOREIGN KEY (fairy_type_id) REFERENCES public.fairy_types(id) ON DELETE CASCADE;


--
-- Name: fairy_type_powers fk_ftp_fairy; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_powers
    ADD CONSTRAINT fk_ftp_fairy FOREIGN KEY (fairy_type_id) REFERENCES public.fairy_types(id) ON DELETE CASCADE;


--
-- Name: fairy_type_powers fk_ftp_power; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fairy_type_powers
    ADD CONSTRAINT fk_ftp_power FOREIGN KEY (power_id) REFERENCES public.fairy_powers(id) ON DELETE CASCADE;


--
-- Name: heritier_notes heritier_notes_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.heritier_notes
    ADD CONSTRAINT heritier_notes_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE SET NULL;


--
-- Name: heritier_notes heritier_notes_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.heritier_notes
    ADD CONSTRAINT heritier_notes_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: heritier_notes heritier_notes_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.heritier_notes
    ADD CONSTRAINT heritier_notes_player_id_fkey FOREIGN KEY (player_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: itineraire_modes_perso itineraire_modes_perso_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itineraire_modes_perso
    ADD CONSTRAINT itineraire_modes_perso_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: journal_repair_requests journal_repair_requests_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_repair_requests
    ADD CONSTRAINT journal_repair_requests_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: journal_repair_requests journal_repair_requests_requested_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_repair_requests
    ADD CONSTRAINT journal_repair_requests_requested_by_fkey FOREIGN KEY (requested_by) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: journal_repair_requests journal_repair_requests_resolved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journal_repair_requests
    ADD CONSTRAINT journal_repair_requests_resolved_by_fkey FOREIGN KEY (resolved_by) REFERENCES auth.users(id);


--
-- Name: llm_usage_log llm_usage_log_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.llm_usage_log
    ADD CONSTRAINT llm_usage_log_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: map_points map_points_visibilite_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.map_points
    ADD CONSTRAINT map_points_visibilite_cercle_id_fkey FOREIGN KEY (visibilite_cercle_id) REFERENCES public.cercles(id) ON DELETE SET NULL;


--
-- Name: menu_plats menu_plats_auteur_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_plats
    ADD CONSTRAINT menu_plats_auteur_id_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: menu_plats menu_plats_validateur_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_plats
    ADD CONSTRAINT menu_plats_validateur_id_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: menu_sauvegardes menu_sauvegardes_utilisateur_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.menu_sauvegardes
    ADD CONSTRAINT menu_sauvegardes_utilisateur_id_fkey FOREIGN KEY (utilisateur_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: notification_history notification_history_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notification_history
    ADD CONSTRAINT notification_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: ombre_consequences ombre_consequences_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ombre_consequences
    ADD CONSTRAINT ombre_consequences_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE CASCADE;


--
-- Name: ombre_consequences ombre_consequences_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ombre_consequences
    ADD CONSTRAINT ombre_consequences_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: ombre_consequences ombre_consequences_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ombre_consequences
    ADD CONSTRAINT ombre_consequences_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);


--
-- Name: ombre_consequences ombre_consequences_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ombre_consequences
    ADD CONSTRAINT ombre_consequences_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.sessions_jeu(id) ON DELETE SET NULL;


--
-- Name: outil_usage outil_usage_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outil_usage
    ADD CONSTRAINT outil_usage_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: pnj_table_entries pnj_table_entries_approved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnj_table_entries
    ADD CONSTRAINT pnj_table_entries_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: pnj_table_entries pnj_table_entries_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnj_table_entries
    ADD CONSTRAINT pnj_table_entries_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: poche_table_entries poche_table_entries_approved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poche_table_entries
    ADD CONSTRAINT poche_table_entries_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: poche_table_entries poche_table_entries_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.poche_table_entries
    ADD CONSTRAINT poche_table_entries_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: registre_forge registre_forge_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.registre_forge
    ADD CONSTRAINT registre_forge_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: session_presents session_presents_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session_presents
    ADD CONSTRAINT session_presents_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: session_presents session_presents_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session_presents
    ADD CONSTRAINT session_presents_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.sessions_jeu(id) ON DELETE CASCADE;


--
-- Name: sessions_jeu sessions_jeu_cercle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions_jeu
    ADD CONSTRAINT sessions_jeu_cercle_id_fkey FOREIGN KEY (cercle_id) REFERENCES public.cercles(id) ON DELETE CASCADE;


--
-- Name: sessions_jeu sessions_jeu_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions_jeu
    ADD CONSTRAINT sessions_jeu_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id);


--
-- Name: social_items social_items_profil_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.social_items
    ADD CONSTRAINT social_items_profil_id_fkey FOREIGN KEY (profil_id) REFERENCES public.profils(id) ON DELETE CASCADE;


--
-- Name: specialites specialites_competence_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.specialites
    ADD CONSTRAINT specialites_competence_id_fkey FOREIGN KEY (competence_id) REFERENCES public.competences(id) ON DELETE CASCADE;


--
-- Name: support_messages support_messages_ticket_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support_messages
    ADD CONSTRAINT support_messages_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES public.support_tickets(id) ON DELETE CASCADE;


--
-- Name: support_messages support_messages_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support_messages
    ADD CONSTRAINT support_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: support_tickets support_tickets_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support_tickets
    ADD CONSTRAINT support_tickets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;


--
-- Name: tracas_table_entries tracas_table_entries_approved_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tracas_table_entries
    ADD CONSTRAINT tracas_table_entries_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: tracas_table_entries tracas_table_entries_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tracas_table_entries
    ADD CONSTRAINT tracas_table_entries_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: user_notification_preferences user_notification_preferences_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_notification_preferences
    ADD CONSTRAINT user_notification_preferences_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: xp_transactions xp_transactions_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.xp_transactions
    ADD CONSTRAINT xp_transactions_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id) ON DELETE CASCADE;


--
-- Name: objects objects_bucketId_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.objects
    ADD CONSTRAINT "objects_bucketId_fkey" FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads s3_multipart_uploads_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads
    ADD CONSTRAINT s3_multipart_uploads_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id);


--
-- Name: s3_multipart_uploads_parts s3_multipart_uploads_parts_upload_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.s3_multipart_uploads_parts
    ADD CONSTRAINT s3_multipart_uploads_parts_upload_id_fkey FOREIGN KEY (upload_id) REFERENCES storage.s3_multipart_uploads(id) ON DELETE CASCADE;


--
-- Name: vector_indexes vector_indexes_bucket_id_fkey; Type: FK CONSTRAINT; Schema: storage; Owner: -
--

ALTER TABLE ONLY storage.vector_indexes
    ADD CONSTRAINT vector_indexes_bucket_id_fkey FOREIGN KEY (bucket_id) REFERENCES storage.buckets_vectors(id);


--
-- Name: audit_log_entries; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.audit_log_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: flow_state; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.flow_state ENABLE ROW LEVEL SECURITY;

--
-- Name: identities; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.identities ENABLE ROW LEVEL SECURITY;

--
-- Name: instances; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.instances ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_amr_claims; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_amr_claims ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_challenges; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_challenges ENABLE ROW LEVEL SECURITY;

--
-- Name: mfa_factors; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.mfa_factors ENABLE ROW LEVEL SECURITY;

--
-- Name: one_time_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.one_time_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: refresh_tokens; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.refresh_tokens ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: saml_relay_states; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.saml_relay_states ENABLE ROW LEVEL SECURITY;

--
-- Name: schema_migrations; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.schema_migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: sessions; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sessions ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_domains; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_domains ENABLE ROW LEVEL SECURITY;

--
-- Name: sso_providers; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.sso_providers ENABLE ROW LEVEL SECURITY;

--
-- Name: users; Type: ROW SECURITY; Schema: auth; Owner: -
--

ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

--
-- Name: notification_history Admin can view all history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admin can view all history" ON public.notification_history USING ((EXISTS ( SELECT 1
   FROM auth.users
  WHERE ((users.id = auth.uid()) AND ((users.email)::text = 'votre-email@example.com'::text)))));


--
-- Name: characters Admin voit tous les personnages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Admin voit tous les personnages" ON public.characters FOR SELECT TO authenticated USING ((auth.email() = 'amaranthe@free.fr'::text));


--
-- Name: specialites Ajout authentifié specialites; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Ajout authentifié specialites" ON public.specialites FOR INSERT TO authenticated WITH CHECK (((char_length(nom) >= 2) AND (char_length(nom) <= 50) AND (is_official = false)));


--
-- Name: journal_votes Allow public insert for journal_votes; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public insert for journal_votes" ON public.journal_votes FOR INSERT WITH CHECK (true);


--
-- Name: historical_events Allow public select for historical_events; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public select for historical_events" ON public.historical_events FOR SELECT USING (true);


--
-- Name: journal_articles Allow public select for journal_articles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public select for journal_articles" ON public.journal_articles FOR SELECT USING (true);


--
-- Name: journal_holidays Allow public select for journal_holidays; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public select for journal_holidays" ON public.journal_holidays FOR SELECT USING (true);


--
-- Name: journal_votes Allow public select for journal_votes; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public select for journal_votes" ON public.journal_votes FOR SELECT USING (true);


--
-- Name: journal_votes Allow public update for journal_votes; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public update for journal_votes" ON public.journal_votes FOR UPDATE USING (true) WITH CHECK (true);


--
-- Name: competences_futiles Authenticated users can insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Authenticated users can insert" ON public.competences_futiles FOR INSERT TO authenticated WITH CHECK (((char_length(name) >= 2) AND (char_length(name) <= 50)));


--
-- Name: figures Authenticated users can insert figures; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Authenticated users can insert figures" ON public.figures FOR INSERT TO authenticated WITH CHECK (true);


--
-- Name: characters Docte peut voir les fiches de ses cercles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Docte peut voir les fiches de ses cercles" ON public.characters FOR SELECT USING ((id IN ( SELECT cm.character_id
   FROM (public.cercle_membres cm
     JOIN public.cercles c ON ((cm.cercle_id = c.id)))
  WHERE ((c.docte_id = auth.uid()) AND (cm.character_id IS NOT NULL)))));


--
-- Name: figures Everyone can read figures; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Everyone can read figures" ON public.figures FOR SELECT USING (true);


--
-- Name: registre_forge Forge lecture admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Forge lecture admin" ON public.registre_forge FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: registre_forge Forge lecture authentifiee; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Forge lecture authentifiee" ON public.registre_forge FOR SELECT TO authenticated USING (((is_masque = false) AND ((is_initie_only = false) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND ((profiles.is_initiated = true) OR (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text, 'docte'::text])))))))));


--
-- Name: titres_honorifiques Forge réservée à l'Architecte; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Forge réservée à l'Architecte" ON public.titres_honorifiques USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))));


--
-- Name: cercles Gérer ses cercles (Doctes); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Gérer ses cercles (Doctes)" ON public.cercles USING ((auth.uid() = docte_id));


--
-- Name: outil_usage Insert own usage; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Insert own usage" ON public.outil_usage FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: admin_settings Insertion admin uniquement; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Insertion admin uniquement" ON public.admin_settings FOR INSERT TO authenticated WITH CHECK ((auth.email() = 'amaranthe@free.fr'::text));


--
-- Name: data_change_requests Insertion de requêtes pour les utilisateurs connectés; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Insertion de requêtes pour les utilisateurs connectés" ON public.data_change_requests FOR INSERT TO authenticated WITH CHECK (((user_id = auth.uid()) AND (status = 'pending'::text)));


--
-- Name: data_change_requests Lecture des requêtes pour les utilisateurs connectés; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture des requêtes pour les utilisateurs connectés" ON public.data_change_requests FOR SELECT TO authenticated USING (true);


--
-- Name: heritier_notes Lecture partagée Cercle; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture partagée Cercle" ON public.heritier_notes FOR SELECT USING (((is_shared = true) AND (cercle_id IS NOT NULL) AND (cercle_id IN ( SELECT cercle_membres.cercle_id
   FROM public.cercle_membres
  WHERE (cercle_membres.user_id = auth.uid())))));


--
-- Name: admin_settings Lecture publique admin_settings; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique admin_settings" ON public.admin_settings FOR SELECT TO authenticated USING (true);


--
-- Name: fairy_type_assets Lecture publique des atouts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des atouts" ON public.fairy_type_assets FOR SELECT USING (true);


--
-- Name: fairy_type_capacites Lecture publique des capacités; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des capacités" ON public.fairy_type_capacites FOR SELECT USING (true);


--
-- Name: social_items Lecture publique des items sociaux; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des items sociaux" ON public.social_items FOR SELECT USING (true);


--
-- Name: fairy_powers Lecture publique des pouvoirs; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des pouvoirs" ON public.fairy_powers FOR SELECT TO authenticated, anon USING (true);


--
-- Name: fairy_type_powers Lecture publique des pouvoirs; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des pouvoirs" ON public.fairy_type_powers FOR SELECT USING (true);


--
-- Name: profiles Lecture publique des profils; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des profils" ON public.profiles FOR SELECT USING ((auth.role() = 'authenticated'::text));


--
-- Name: titres_honorifiques Lecture publique des titres; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique des titres" ON public.titres_honorifiques FOR SELECT USING (true);


--
-- Name: fairy_types Lecture publique fairy_types; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique fairy_types" ON public.fairy_types FOR SELECT USING (true);


--
-- Name: fairy_competences_predilection Lecture publique predilections; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique predilections" ON public.fairy_competences_predilection FOR SELECT USING (true);


--
-- Name: sorts Lecture publique sorts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique sorts" ON public.sorts FOR SELECT TO authenticated USING (true);


--
-- Name: specialites Lecture publique specialites; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture publique specialites" ON public.specialites FOR SELECT USING (true);


--
-- Name: characters Lecture unifiée characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture unifiée characters" ON public.characters FOR SELECT USING (((is_public = true) OR (user_id = auth.uid()) OR (( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = ANY (ARRAY['gardien'::text, 'super_admin'::text]))));


--
-- Name: fairy_assets Lecture unifiée fairy_assets; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lecture unifiée fairy_assets" ON public.fairy_assets FOR SELECT USING (true);


--
-- Name: support_messages Les admins gèrent tous les messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les admins gèrent tous les messages" ON public.support_messages USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: support_tickets Les admins gèrent tous les tickets; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les admins gèrent tous les tickets" ON public.support_tickets USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: support_tickets Les joueurs créent leurs tickets; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs créent leurs tickets" ON public.support_tickets FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: support_messages Les joueurs envoient leurs messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs envoient leurs messages" ON public.support_messages FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: character_snapshots Les joueurs peuvent créer leurs propres snapshots; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs peuvent créer leurs propres snapshots" ON public.character_snapshots FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: character_snapshots Les joueurs peuvent supprimer leurs propres snapshots; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs peuvent supprimer leurs propres snapshots" ON public.character_snapshots FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: support_messages Les joueurs voient leurs propres messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs voient leurs propres messages" ON public.support_messages FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: character_snapshots Les joueurs voient leurs propres snapshots; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs voient leurs propres snapshots" ON public.character_snapshots FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: support_tickets Les joueurs voient leurs propres tickets; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Les joueurs voient leurs propres tickets" ON public.support_tickets FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: data_change_requests Mise à jour des requêtes; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Mise à jour des requêtes" ON public.data_change_requests FOR UPDATE TO authenticated USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = ANY (ARRAY['gardien'::text, 'super_admin'::text])));


--
-- Name: registre_forge Modification par Gardiens ou Propriétaires; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Modification par Gardiens ou Propriétaires" ON public.registre_forge FOR UPDATE USING (((auth.uid() = user_id) OR (auth.uid() IN ( SELECT profiles.id
   FROM public.profiles
  WHERE (profiles.role = ANY (ARRAY['gardien'::text, 'super_admin'::text]))))));


--
-- Name: fairy_assets Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_assets FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_capacites Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_capacites FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_competences_futiles_predilection Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_competences_futiles_predilection FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_competences_predilection Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_competences_predilection FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_powers Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_powers FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_type_assets Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_type_assets FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_type_capacites Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_type_capacites FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_type_powers Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_type_powers FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: fairy_types Privilège de Destruction (Super Admin); Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Privilège de Destruction (Super Admin)" ON public.fairy_types FOR DELETE USING ((( SELECT profiles.role
   FROM public.profiles
  WHERE (profiles.id = auth.uid())) = 'super_admin'::text));


--
-- Name: heritier_notes Propriétaire absolu; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Propriétaire absolu" ON public.heritier_notes USING ((auth.uid() = player_id));


--
-- Name: competences Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.competences FOR SELECT USING (true);


--
-- Name: competences_futiles Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.competences_futiles FOR SELECT USING (true);


--
-- Name: fairy_capacites Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.fairy_capacites FOR SELECT USING (true);


--
-- Name: fairy_competences_futiles_predilection Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.fairy_competences_futiles_predilection FOR SELECT USING (true);


--
-- Name: fairy_types Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.fairy_types FOR SELECT USING (true);


--
-- Name: profils Public read access; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public read access" ON public.profils FOR SELECT USING (true);


--
-- Name: POLICY "Public read access" ON profils; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON POLICY "Public read access" ON public.profils IS 'Données publiques: tout le monde peut lire';


--
-- Name: cercle_membres Quitter ou exclure d'un cercle; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Quitter ou exclure d'un cercle" ON public.cercle_membres FOR DELETE USING (((auth.uid() = user_id) OR (cercle_id IN ( SELECT cercles.id
   FROM public.cercles
  WHERE (cercles.docte_id = auth.uid())))));


--
-- Name: data_change_requests Radar_Gardiens_Policy; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Radar_Gardiens_Policy" ON public.data_change_requests FOR SELECT TO authenticated USING (true);


--
-- Name: outil_usage Read all usage; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Read all usage" ON public.outil_usage FOR SELECT TO authenticated USING (true);


--
-- Name: cercle_membres Rejoindre un cercle; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Rejoindre un cercle" ON public.cercle_membres FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: profiles Seul le Super Admin peut modifier les rôles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Seul le Super Admin peut modifier les rôles" ON public.profiles FOR UPDATE USING ((( SELECT profiles_1.role
   FROM public.profiles profiles_1
  WHERE (profiles_1.id = auth.uid())) = 'super_admin'::text));


--
-- Name: registre_forge Soumission par les Héritiers authentifiés; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Soumission par les Héritiers authentifiés" ON public.registre_forge FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: profiles Super Admin peut changer les rôles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Super Admin peut changer les rôles" ON public.profiles FOR UPDATE USING ((( SELECT profiles_1.role
   FROM public.profiles profiles_1
  WHERE (profiles_1.id = auth.uid())) = 'super_admin'::text)) WITH CHECK ((( SELECT profiles_1.role
   FROM public.profiles profiles_1
  WHERE (profiles_1.id = auth.uid())) = 'super_admin'::text));


--
-- Name: characters Super admin can delete all characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Super admin can delete all characters" ON public.characters FOR DELETE USING (((auth.uid() = user_id) OR (public.get_user_role(auth.uid()) = 'super_admin'::text)));


--
-- Name: characters Super admin can update all characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Super admin can update all characters" ON public.characters FOR UPDATE USING (((auth.uid() = user_id) OR (public.get_user_role(auth.uid()) = 'super_admin'::text))) WITH CHECK (((auth.uid() = user_id) OR (public.get_user_role(auth.uid()) = 'super_admin'::text)));


--
-- Name: characters Super admin can view all characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Super admin can view all characters" ON public.characters FOR SELECT USING (((auth.uid() = user_id) OR (public.get_user_role(auth.uid()) = 'super_admin'::text)));


--
-- Name: admin_settings Suppression admin uniquement; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Suppression admin uniquement" ON public.admin_settings FOR DELETE TO authenticated USING ((auth.email() = 'amaranthe@free.fr'::text));


--
-- Name: characters Users can delete their own characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete their own characters" ON public.characters FOR DELETE USING ((user_id = auth.uid()));


--
-- Name: characters Users can insert their own characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own characters" ON public.characters FOR INSERT WITH CHECK ((user_id = auth.uid()));


--
-- Name: profiles Users can insert their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK ((auth.uid() = id));


--
-- Name: characters Users can update their own characters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own characters" ON public.characters FOR UPDATE USING ((user_id = auth.uid())) WITH CHECK ((user_id = auth.uid()));


--
-- Name: profiles Users can update their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING ((auth.uid() = id));


--
-- Name: notification_history Users can view own history; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own history" ON public.notification_history FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: cercle_membres Voir les membres de son cercle; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Voir les membres de son cercle" ON public.cercle_membres FOR SELECT USING ((cercle_id IN ( SELECT public.get_my_cercles() AS get_my_cercles)));


--
-- Name: cercles Voir ses propres cercles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Voir ses propres cercles" ON public.cercles FOR SELECT USING ((id IN ( SELECT public.get_my_cercles() AS get_my_cercles)));


--
-- Name: admin_settings; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_repair_requests admins_delete_repair_requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admins_delete_repair_requests ON public.journal_repair_requests FOR DELETE USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: journal_repair_requests admins_update_repair_requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY admins_update_repair_requests ON public.journal_repair_requests FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: ambiance_table_entries ambiance_entries_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ambiance_entries_insert ON public.ambiance_table_entries FOR INSERT TO authenticated WITH CHECK ((created_by = auth.uid()));


--
-- Name: ambiance_table_entries ambiance_entries_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ambiance_entries_select ON public.ambiance_table_entries FOR SELECT TO authenticated USING (((status = 'approved'::text) OR (created_by = auth.uid())));


--
-- Name: ambiance_table_entries ambiance_entries_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ambiance_entries_update_admin ON public.ambiance_table_entries FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: ambiance_table_entries; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.ambiance_table_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: bug_reports br_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY br_insert ON public.bug_reports FOR INSERT WITH CHECK ((user_id = auth.uid()));


--
-- Name: bug_reports br_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY br_select ON public.bug_reports FOR SELECT USING (((is_confidential = false) OR (user_id = auth.uid())));


--
-- Name: bug_reports br_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY br_update ON public.bug_reports FOR UPDATE USING ((user_id = auth.uid()));


--
-- Name: bug_reports; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;

--
-- Name: chat_channels cc_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cc_insert ON public.chat_channels FOR INSERT WITH CHECK ((auth.role() = 'authenticated'::text));


--
-- Name: chat_channels cc_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cc_update ON public.chat_channels FOR UPDATE USING (((participant_1 = auth.uid()) OR (participant_2 = auth.uid())));


--
-- Name: chat_channels cc_view; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cc_view ON public.chat_channels FOR SELECT USING (((participant_1 = auth.uid()) OR (participant_2 = auth.uid()) OR (type = ANY (ARRAY['cercle'::text, 'support'::text, 'public'::text]))));


--
-- Name: cercle_membres; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.cercle_membres ENABLE ROW LEVEL SECURITY;

--
-- Name: cercle_revelations; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.cercle_revelations ENABLE ROW LEVEL SECURITY;

--
-- Name: cercles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.cercles ENABLE ROW LEVEL SECURITY;

--
-- Name: character_snapshots; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.character_snapshots ENABLE ROW LEVEL SECURITY;

--
-- Name: characters; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;

--
-- Name: chat_channels; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.chat_channels ENABLE ROW LEVEL SECURITY;

--
-- Name: chat_message_reads; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.chat_message_reads ENABLE ROW LEVEL SECURITY;

--
-- Name: chat_messages; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

--
-- Name: chroniques_heritiers chroniques_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY chroniques_delete ON public.chroniques_heritiers FOR DELETE USING ((created_by = auth.uid()));


--
-- Name: chroniques_heritiers; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.chroniques_heritiers ENABLE ROW LEVEL SECURITY;

--
-- Name: chroniques_heritiers chroniques_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY chroniques_insert ON public.chroniques_heritiers FOR INSERT WITH CHECK ((created_by = auth.uid()));


--
-- Name: chroniques_heritiers chroniques_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY chroniques_select ON public.chroniques_heritiers FOR SELECT USING (((created_by = auth.uid()) OR (EXISTS ( SELECT 1
   FROM ((public.cercles c
     JOIN public.cercle_membres cm ON ((cm.cercle_id = c.id)))
     JOIN public.characters ch ON ((ch.id = chroniques_heritiers.character_id)))
  WHERE ((c.docte_id = auth.uid()) AND (cm.user_id = ch.user_id))))));


--
-- Name: chroniques_heritiers chroniques_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY chroniques_update ON public.chroniques_heritiers FOR UPDATE USING ((created_by = auth.uid()));


--
-- Name: chat_messages cm_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cm_insert ON public.chat_messages FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM public.chat_channels
  WHERE ((chat_channels.id = chat_messages.channel_id) AND ((chat_channels.participant_1 = auth.uid()) OR (chat_channels.participant_2 = auth.uid()) OR (chat_channels.type = ANY (ARRAY['cercle'::text, 'support'::text, 'public'::text])))))));


--
-- Name: chat_messages cm_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cm_select ON public.chat_messages FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.chat_channels
  WHERE ((chat_channels.id = chat_messages.channel_id) AND ((chat_channels.participant_1 = auth.uid()) OR (chat_channels.participant_2 = auth.uid()) OR (chat_channels.type = ANY (ARRAY['cercle'::text, 'support'::text, 'public'::text])))))));


--
-- Name: chat_message_reads cmr_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cmr_insert ON public.chat_message_reads FOR INSERT TO authenticated WITH CHECK ((user_id = auth.uid()));


--
-- Name: chat_message_reads cmr_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cmr_select ON public.chat_message_reads FOR SELECT TO authenticated USING (true);


--
-- Name: competences; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.competences ENABLE ROW LEVEL SECURITY;

--
-- Name: competences_futiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.competences_futiles ENABLE ROW LEVEL SECURITY;

--
-- Name: cercle_revelations cr_delete_docte; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cr_delete_docte ON public.cercle_revelations FOR DELETE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = cercle_revelations.cercle_id) AND (cercles.docte_id = auth.uid())))));


--
-- Name: cercle_revelations cr_insert_docte; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cr_insert_docte ON public.cercle_revelations FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = cercle_revelations.cercle_id) AND (cercles.docte_id = auth.uid())))));


--
-- Name: cercle_revelations cr_select_cercle; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cr_select_cercle ON public.cercle_revelations FOR SELECT TO authenticated USING (((EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = cercle_revelations.cercle_id) AND (cercles.docte_id = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM public.cercle_membres
  WHERE ((cercle_membres.cercle_id = cercle_revelations.cercle_id) AND (cercle_membres.user_id = auth.uid()))))));


--
-- Name: cercle_revelations cr_update_docte; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY cr_update_docte ON public.cercle_revelations FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = cercle_revelations.cercle_id) AND (cercles.docte_id = auth.uid())))));


--
-- Name: data_change_requests; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.data_change_requests ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_assets; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_assets ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_capacites; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_capacites ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_competences_futiles_predilection; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_competences_futiles_predilection ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_competences_predilection; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_competences_predilection ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_powers; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_powers ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_type_assets; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_type_assets ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_type_capacites; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_type_capacites ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_type_powers; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_type_powers ENABLE ROW LEVEL SECURITY;

--
-- Name: fairy_types; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.fairy_types ENABLE ROW LEVEL SECURITY;

--
-- Name: figures; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.figures ENABLE ROW LEVEL SECURITY;

--
-- Name: heritier_notes; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.heritier_notes ENABLE ROW LEVEL SECURITY;

--
-- Name: historical_events; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.historical_events ENABLE ROW LEVEL SECURITY;

--
-- Name: indices_verites; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.indices_verites ENABLE ROW LEVEL SECURITY;

--
-- Name: itineraire_modes_perso; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.itineraire_modes_perso ENABLE ROW LEVEL SECURITY;

--
-- Name: indices_verites iv_delete_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY iv_delete_admin ON public.indices_verites FOR DELETE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: indices_verites iv_insert_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY iv_insert_admin ON public.indices_verites FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: indices_verites iv_select_all; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY iv_select_all ON public.indices_verites FOR SELECT USING (true);


--
-- Name: indices_verites iv_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY iv_update_admin ON public.indices_verites FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: journal_articles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.journal_articles ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_daily_info; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.journal_daily_info ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_holidays; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.journal_holidays ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_repair_requests; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.journal_repair_requests ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_votes; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.journal_votes ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_daily_info lecture_publique; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY lecture_publique ON public.journal_daily_info FOR SELECT USING (true);


--
-- Name: llm_usage_log; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.llm_usage_log ENABLE ROW LEVEL SECURITY;

--
-- Name: llm_usage_log llm_usage_log_select_super_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY llm_usage_log_select_super_admin ON public.llm_usage_log FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))));


--
-- Name: map_points; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.map_points ENABLE ROW LEVEL SECURITY;

--
-- Name: map_points map_points_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY map_points_delete ON public.map_points FOR DELETE USING (((auth.uid() = created_by) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))) OR ((visibilite = 'cercle'::text) AND (EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = map_points.visibilite_cercle_id) AND (cercles.docte_id = auth.uid())))))));


--
-- Name: map_points map_points_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY map_points_insert ON public.map_points FOR INSERT WITH CHECK ((auth.uid() = created_by));


--
-- Name: map_points map_points_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY map_points_select ON public.map_points FOR SELECT USING (((visibilite = 'public'::text) OR (auth.uid() = created_by) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))) OR ((visibilite = 'cercle'::text) AND ((EXISTS ( SELECT 1
   FROM public.cercle_membres
  WHERE ((cercle_membres.cercle_id = map_points.visibilite_cercle_id) AND (cercle_membres.user_id = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = map_points.visibilite_cercle_id) AND (cercles.docte_id = auth.uid()))))))));


--
-- Name: map_points map_points_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY map_points_update ON public.map_points FOR UPDATE USING (((auth.uid() = created_by) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))) OR ((visibilite = 'cercle'::text) AND (EXISTS ( SELECT 1
   FROM public.cercles
  WHERE ((cercles.id = map_points.visibilite_cercle_id) AND (cercles.docte_id = auth.uid())))))));


--
-- Name: menu_plats; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.menu_plats ENABLE ROW LEVEL SECURITY;

--
-- Name: menu_plats menu_plats_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_plats_insert ON public.menu_plats FOR INSERT TO authenticated WITH CHECK (((created_by = auth.uid()) AND ((status = 'pending'::text) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))))));


--
-- Name: menu_plats menu_plats_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_plats_select ON public.menu_plats FOR SELECT TO authenticated USING (((status = 'approved'::text) OR (created_by = auth.uid())));


--
-- Name: menu_plats menu_plats_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_plats_update_admin ON public.menu_plats FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: menu_sauvegardes; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.menu_sauvegardes ENABLE ROW LEVEL SECURITY;

--
-- Name: menu_sauvegardes menu_sauvegardes_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_sauvegardes_delete ON public.menu_sauvegardes FOR DELETE TO authenticated USING ((utilisateur_id = auth.uid()));


--
-- Name: menu_sauvegardes menu_sauvegardes_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_sauvegardes_insert ON public.menu_sauvegardes FOR INSERT TO authenticated WITH CHECK ((utilisateur_id = auth.uid()));


--
-- Name: menu_sauvegardes menu_sauvegardes_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_sauvegardes_select ON public.menu_sauvegardes FOR SELECT TO authenticated USING ((utilisateur_id = auth.uid()));


--
-- Name: menu_structures; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.menu_structures ENABLE ROW LEVEL SECURITY;

--
-- Name: menu_structures menu_structures_insert_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_structures_insert_admin ON public.menu_structures FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: menu_structures menu_structures_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_structures_select ON public.menu_structures FOR SELECT TO authenticated USING (true);


--
-- Name: menu_structures menu_structures_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY menu_structures_update_admin ON public.menu_structures FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: notification_history; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.notification_history ENABLE ROW LEVEL SECURITY;

--
-- Name: notification_history notification_history_insert_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY notification_history_insert_admin ON public.notification_history FOR INSERT TO authenticated WITH CHECK ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))));


--
-- Name: notification_history notification_history_select_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY notification_history_select_admin ON public.notification_history FOR SELECT TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))));


--
-- Name: ombre_consequences; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.ombre_consequences ENABLE ROW LEVEL SECURITY;

--
-- Name: ombre_consequences ombre_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ombre_delete ON public.ombre_consequences FOR DELETE USING ((created_by = auth.uid()));


--
-- Name: ombre_consequences ombre_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ombre_insert ON public.ombre_consequences FOR INSERT WITH CHECK (((created_by = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.cercles c
  WHERE ((c.id = ombre_consequences.cercle_id) AND (c.docte_id = auth.uid()))))));


--
-- Name: ombre_consequences ombre_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ombre_select ON public.ombre_consequences FOR SELECT USING (((created_by = auth.uid()) OR ((est_revelee = true) AND (EXISTS ( SELECT 1
   FROM public.characters ch
  WHERE ((ch.id = ombre_consequences.character_id) AND (ch.user_id = auth.uid())))))));


--
-- Name: ombre_consequences ombre_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY ombre_update ON public.ombre_consequences FOR UPDATE USING ((created_by = auth.uid()));


--
-- Name: outil_usage; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.outil_usage ENABLE ROW LEVEL SECURITY;

--
-- Name: journal_repair_requests players_insert_own_repair_requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY players_insert_own_repair_requests ON public.journal_repair_requests FOR INSERT WITH CHECK (((requested_by = auth.uid()) AND (EXISTS ( SELECT 1
   FROM public.characters
  WHERE ((characters.id = journal_repair_requests.character_id) AND (characters.user_id = auth.uid()))))));


--
-- Name: journal_repair_requests players_view_own_repair_requests; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY players_view_own_repair_requests ON public.journal_repair_requests FOR SELECT USING (((requested_by = auth.uid()) OR (EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text])))))));


--
-- Name: pnj_table_entries pnj_entries_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY pnj_entries_insert ON public.pnj_table_entries FOR INSERT TO authenticated WITH CHECK ((created_by = auth.uid()));


--
-- Name: pnj_table_entries pnj_entries_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY pnj_entries_select ON public.pnj_table_entries FOR SELECT TO authenticated USING (((status = 'approved'::text) OR (created_by = auth.uid())));


--
-- Name: pnj_table_entries pnj_entries_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY pnj_entries_update_admin ON public.pnj_table_entries FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: pnj_table_entries; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.pnj_table_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: poche_table_entries poche_entries_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY poche_entries_insert ON public.poche_table_entries FOR INSERT TO authenticated WITH CHECK ((created_by = auth.uid()));


--
-- Name: poche_table_entries poche_entries_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY poche_entries_select ON public.poche_table_entries FOR SELECT TO authenticated USING (((status = 'approved'::text) OR (created_by = auth.uid())));


--
-- Name: poche_table_entries poche_entries_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY poche_entries_update_admin ON public.poche_table_entries FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: poche_table_entries; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.poche_table_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: profils; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profils ENABLE ROW LEVEL SECURITY;

--
-- Name: registre_forge; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.registre_forge ENABLE ROW LEVEL SECURITY;

--
-- Name: session_presents; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.session_presents ENABLE ROW LEVEL SECURITY;

--
-- Name: session_presents session_presents_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY session_presents_delete ON public.session_presents FOR DELETE USING ((EXISTS ( SELECT 1
   FROM (public.sessions_jeu sj
     JOIN public.cercles c ON ((c.id = sj.cercle_id)))
  WHERE ((sj.id = session_presents.session_id) AND ((sj.created_by = auth.uid()) OR (c.docte_id = auth.uid()))))));


--
-- Name: session_presents session_presents_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY session_presents_insert ON public.session_presents FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM (public.sessions_jeu sj
     JOIN public.cercles c ON ((c.id = sj.cercle_id)))
  WHERE ((sj.id = session_presents.session_id) AND ((sj.created_by = auth.uid()) OR (c.docte_id = auth.uid()))))));


--
-- Name: session_presents session_presents_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY session_presents_select ON public.session_presents FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.sessions_jeu sj
  WHERE ((sj.id = session_presents.session_id) AND ((sj.is_public = true) OR (sj.created_by = auth.uid()) OR (EXISTS ( SELECT 1
           FROM public.cercles c
          WHERE ((c.id = sj.cercle_id) AND (c.docte_id = auth.uid())))) OR (EXISTS ( SELECT 1
           FROM public.cercle_membres cm
          WHERE ((cm.cercle_id = sj.cercle_id) AND (cm.user_id = auth.uid())))))))));


--
-- Name: session_presents session_presents_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY session_presents_update ON public.session_presents FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM (public.sessions_jeu sj
     JOIN public.cercles c ON ((c.id = sj.cercle_id)))
  WHERE ((sj.id = session_presents.session_id) AND ((sj.created_by = auth.uid()) OR (c.docte_id = auth.uid()))))));


--
-- Name: sessions_jeu; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.sessions_jeu ENABLE ROW LEVEL SECURITY;

--
-- Name: sessions_jeu sessions_jeu_delete; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY sessions_jeu_delete ON public.sessions_jeu FOR DELETE USING (((created_by = auth.uid()) OR (EXISTS ( SELECT 1
   FROM public.cercles c
  WHERE ((c.id = sessions_jeu.cercle_id) AND (c.docte_id = auth.uid()))))));


--
-- Name: sessions_jeu sessions_jeu_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY sessions_jeu_insert ON public.sessions_jeu FOR INSERT WITH CHECK (((created_by = auth.uid()) AND ((EXISTS ( SELECT 1
   FROM public.cercles c
  WHERE ((c.id = sessions_jeu.cercle_id) AND (c.docte_id = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM public.cercle_membres cm
  WHERE ((cm.cercle_id = sessions_jeu.cercle_id) AND (cm.user_id = auth.uid())))))));


--
-- Name: sessions_jeu sessions_jeu_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY sessions_jeu_select ON public.sessions_jeu FOR SELECT USING (((is_public = true) OR (EXISTS ( SELECT 1
   FROM public.cercles c
  WHERE ((c.id = sessions_jeu.cercle_id) AND (c.docte_id = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM public.cercle_membres cm
  WHERE ((cm.cercle_id = sessions_jeu.cercle_id) AND (cm.user_id = auth.uid()))))));


--
-- Name: sessions_jeu sessions_jeu_update; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY sessions_jeu_update ON public.sessions_jeu FOR UPDATE USING (((created_by = auth.uid()) OR (EXISTS ( SELECT 1
   FROM public.cercles c
  WHERE ((c.id = sessions_jeu.cercle_id) AND (c.docte_id = auth.uid()))))));


--
-- Name: social_items; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.social_items ENABLE ROW LEVEL SECURITY;

--
-- Name: sorts; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.sorts ENABLE ROW LEVEL SECURITY;

--
-- Name: specialites; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.specialites ENABLE ROW LEVEL SECURITY;

--
-- Name: heritier_notes super_admin_select_all_notes; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY super_admin_select_all_notes ON public.heritier_notes FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = 'super_admin'::text)))));


--
-- Name: support_messages; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

--
-- Name: support_tickets; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

--
-- Name: titres_honorifiques; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.titres_honorifiques ENABLE ROW LEVEL SECURITY;

--
-- Name: tracas_table_entries tracas_entries_insert; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY tracas_entries_insert ON public.tracas_table_entries FOR INSERT TO authenticated WITH CHECK ((created_by = auth.uid()));


--
-- Name: tracas_table_entries tracas_entries_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY tracas_entries_select ON public.tracas_table_entries FOR SELECT TO authenticated USING (((status = 'approved'::text) OR (created_by = auth.uid())));


--
-- Name: tracas_table_entries tracas_entries_update_admin; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY tracas_entries_update_admin ON public.tracas_table_entries FOR UPDATE TO authenticated USING ((EXISTS ( SELECT 1
   FROM public.profiles
  WHERE ((profiles.id = auth.uid()) AND (profiles.role = ANY (ARRAY['super_admin'::text, 'gardien'::text]))))));


--
-- Name: tracas_table_entries; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.tracas_table_entries ENABLE ROW LEVEL SECURITY;

--
-- Name: user_notification_preferences; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_notification_preferences ENABLE ROW LEVEL SECURITY;

--
-- Name: user_notification_preferences user_owns_row; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY user_owns_row ON public.user_notification_preferences USING ((auth.uid() = user_id)) WITH CHECK ((auth.uid() = user_id));


--
-- Name: itineraire_modes_perso users manage own mode; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "users manage own mode" ON public.itineraire_modes_perso USING ((auth.uid() = user_id)) WITH CHECK ((auth.uid() = user_id));


--
-- Name: xp_transactions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.xp_transactions ENABLE ROW LEVEL SECURITY;

--
-- Name: xp_transactions xp_tx_delete_own; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY xp_tx_delete_own ON public.xp_transactions FOR DELETE USING ((character_id IN ( SELECT characters.id
   FROM public.characters
  WHERE (characters.user_id = auth.uid()))));


--
-- Name: xp_transactions xp_tx_insert_own; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY xp_tx_insert_own ON public.xp_transactions FOR INSERT WITH CHECK ((character_id IN ( SELECT characters.id
   FROM public.characters
  WHERE (characters.user_id = auth.uid()))));


--
-- Name: xp_transactions xp_tx_select_own; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY xp_tx_select_own ON public.xp_transactions FOR SELECT USING ((character_id IN ( SELECT characters.id
   FROM public.characters
  WHERE (characters.user_id = auth.uid()))));


--
-- Name: messages; Type: ROW SECURITY; Schema: realtime; Owner: -
--

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets_analytics; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets_analytics ENABLE ROW LEVEL SECURITY;

--
-- Name: buckets_vectors; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.buckets_vectors ENABLE ROW LEVEL SECURITY;

--
-- Name: objects bug_captures_insert_authenticated; Type: POLICY; Schema: storage; Owner: -
--

CREATE POLICY bug_captures_insert_authenticated ON storage.objects FOR INSERT TO authenticated WITH CHECK ((bucket_id = 'bug_captures'::text));


--
-- Name: migrations; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.migrations ENABLE ROW LEVEL SECURITY;

--
-- Name: objects; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

--
-- Name: objects portraits_insert_own_folder; Type: POLICY; Schema: storage; Owner: -
--

CREATE POLICY portraits_insert_own_folder ON storage.objects FOR INSERT TO authenticated WITH CHECK (((bucket_id = 'portraits'::text) AND ((storage.foldername(name))[1] = (auth.uid())::text)));


--
-- Name: objects portraits_select_own_folder; Type: POLICY; Schema: storage; Owner: -
--

CREATE POLICY portraits_select_own_folder ON storage.objects FOR SELECT TO authenticated USING (((bucket_id = 'portraits'::text) AND ((storage.foldername(name))[1] = (auth.uid())::text)));


--
-- Name: objects portraits_update_own_folder; Type: POLICY; Schema: storage; Owner: -
--

CREATE POLICY portraits_update_own_folder ON storage.objects FOR UPDATE TO authenticated USING (((bucket_id = 'portraits'::text) AND ((storage.foldername(name))[1] = (auth.uid())::text))) WITH CHECK (((bucket_id = 'portraits'::text) AND ((storage.foldername(name))[1] = (auth.uid())::text)));


--
-- Name: s3_multipart_uploads; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads ENABLE ROW LEVEL SECURITY;

--
-- Name: s3_multipart_uploads_parts; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.s3_multipart_uploads_parts ENABLE ROW LEVEL SECURITY;

--
-- Name: vector_indexes; Type: ROW SECURITY; Schema: storage; Owner: -
--

ALTER TABLE storage.vector_indexes ENABLE ROW LEVEL SECURITY;

--
-- Name: supabase_realtime; Type: PUBLICATION; Schema: -; Owner: -
--

CREATE PUBLICATION supabase_realtime WITH (publish = 'insert, update, delete, truncate');


--
-- Name: supabase_realtime_messages_publication; Type: PUBLICATION; Schema: -; Owner: -
--

CREATE PUBLICATION supabase_realtime_messages_publication WITH (publish = 'insert, update, delete, truncate');


--
-- Name: supabase_realtime_messages_publication messages; Type: PUBLICATION TABLE; Schema: realtime; Owner: -
--

ALTER PUBLICATION supabase_realtime_messages_publication ADD TABLE ONLY realtime.messages;


--
-- Name: issue_graphql_placeholder; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_graphql_placeholder ON sql_drop
         WHEN TAG IN ('DROP EXTENSION')
   EXECUTE FUNCTION extensions.set_graphql_placeholder();


--
-- Name: issue_pg_cron_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_cron_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_cron_access();


--
-- Name: issue_pg_graphql_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_graphql_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_graphql_access();


--
-- Name: issue_pg_net_access; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end
         WHEN TAG IN ('CREATE EXTENSION')
   EXECUTE FUNCTION extensions.grant_pg_net_access();


--
-- Name: pgrst_ddl_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_ddl_watch ON ddl_command_end
   EXECUTE FUNCTION extensions.pgrst_ddl_watch();


--
-- Name: pgrst_drop_watch; Type: EVENT TRIGGER; Schema: -; Owner: -
--

CREATE EVENT TRIGGER pgrst_drop_watch ON sql_drop
   EXECUTE FUNCTION extensions.pgrst_drop_watch();


--
-- PostgreSQL database dump complete
--

\unrestrict tOTCbgrOIP6XgNrqc5Bo597a8iQ6yf2smQmohFiFgYEoPI8Q70ftStMfMx6t45Q

