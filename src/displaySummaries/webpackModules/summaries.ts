import spacepack from "@moonlight-mod/wp/spacepack_spacepack"; 
import {
    ChannelStore,
    UserStore,
    GuildStore,
    ReferencedMessageStore,
    SelectedChannelStore,
    DataStore
  } from "@moonlight-mod/wp/common_stores";

const SummaryStore = spacepack.findByCode("allSummaries","findSummary");
const createSummaryFromServer = spacepack.findByCode(".people)),startId:", ".type}");
interface Summary {
    count: number;
    end_id: string;
    id: string;
    message_ids: string[];
    people: string[];
    source: number;
    start_id: string;
    summ_short: string;
    topic: string;
    type: number;
    unsafe: boolean;
}
interface ChannelSummaries {
    type: string;
    channel_id: string;
    guild_id: string;
    summaries: Summary[];
    time?: number;
}   



