package com.hms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hms.model.Doctor;
import com.hms.model.User;

public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    Doctor findByEmployee_User(User user);
}
