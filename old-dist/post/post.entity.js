"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("./enums");
let PostEntity = class PostEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PostEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 180,
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: enums_1.PostCategory
    }),
    __metadata("design:type", Number)
], PostEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({
        default: true
    }),
    __metadata("design:type", Boolean)
], PostEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], PostEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({
        type: "datetime",
        nullable: true
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "updatedAt", void 0);
PostEntity = __decorate([
    typeorm_1.Entity('posts')
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map