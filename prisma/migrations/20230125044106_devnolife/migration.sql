-- CreateTable
CREATE TABLE `apotek_anugrah` (
    `id_customer` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pasiien` VARCHAR(255) NULL,
    `nama_penyakit` VARCHAR(255) NULL,
    `nama_obat` VARCHAR(255) NULL,
    `harga_obat` INTEGER NULL,

    PRIMARY KEY (`id_customer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallery_phone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_hp` VARCHAR(255) NULL,
    `merek_hp` VARCHAR(255) NULL,
    `warna_hp` VARCHAR(255) NULL,
    `RAM` INTEGER NULL,
    `ROM` INTEGER NULL,
    `processor` VARCHAR(255) NULL,
    `harga` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voucher_parkir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pemilik` VARCHAR(255) NULL,
    `jenis_kendaraan` VARCHAR(255) NULL,
    `merk` VARCHAR(255) NULL,
    `plat` VARCHAR(4) NOT NULL,
    `paket_parkir` VARCHAR(255) NULL,
    `tanggal_masuk` TIMESTAMP(0) NOT NULL,
    `tanggal_expired` TIMESTAMP(0) NOT NULL,

    UNIQUE INDEX `voucher_parkir_id_key`(`id`),
    UNIQUE INDEX `voucher_parkir_plat_key`(`plat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `karyawan` (
    `id_karyawan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_karyawan` VARCHAR(255) NOT NULL,
    `jabatan_karyawan` VARCHAR(255) NOT NULL,
    `gaji_karyawan` INTEGER NOT NULL,
    `tunjangan` INTEGER NOT NULL,
    `jam_kerja` INTEGER NOT NULL,
    `pendidikan` VARCHAR(255) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_karyawan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
