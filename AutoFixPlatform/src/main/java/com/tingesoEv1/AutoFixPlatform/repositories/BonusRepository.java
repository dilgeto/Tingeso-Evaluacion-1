package com.tingesoEv1.AutoFixPlatform.repositories;

import com.tingesoEv1.AutoFixPlatform.entities.BonusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BonusRepository extends JpaRepository<BonusEntity, Long> {
    public BonusEntity findByBrand(String brand);
}
