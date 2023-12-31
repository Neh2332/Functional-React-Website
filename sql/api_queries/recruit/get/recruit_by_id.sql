SELECT recruit.id, recruit.u_name, recruit.pass_hash, recruit.full_name, recruit.recruit_location, recruit.bio, recruit.picture, recruit.recruit_resume, recruit_status.recruit_status, profession.profession
FROM
    (recruit JOIN recruit_status
        ON recruit.recruit_status_id = recruit_status.id)
    LEFT JOIN recruit_professions
        ON recruit.id = recruit_professions.recruit_id
    LEFT JOIN profession
        ON recruit_professions.profession_id = profession.id
WHERE recruit.id = 5;
