import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
export declare class AuctionController {
    private readonly auctionService;
    constructor(auctionService: AuctionService);
    create(createAuctionDto: CreateAuctionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuctionDto: UpdateAuctionDto): string;
    remove(id: string): string;
}
