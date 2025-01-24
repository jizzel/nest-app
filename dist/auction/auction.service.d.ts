import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
export declare class AuctionService {
    create(createAuctionDto: CreateAuctionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuctionDto: UpdateAuctionDto): string;
    remove(id: number): string;
}
