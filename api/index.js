import axios from 'axios';

export default async function handler(req, res) {
    // ==========================================
    // YAHAN APNA TARGET URL DALEIN
    // ==========================================
    // Niche wali line mein woh link dalein jisko aap hit karna chahte hain
    const targetApi = "https://otp-tec.fak-official.workers.dev/public"; 
    
    // Note: Agar API query parameters (jaise ?number=... ya ?link=...) leti hai, 
    // to wo hum niche req.query se pass kar rahe hain.

    try {
        // 1. Target API ko request bhejna
        // Hum user se aane wale saare parameters (req.query) aage bhej rahe hain
        const response = await axios.get(targetApi, {
            params: req.query,
            headers: {
                // Kuch APIs User-Agent check karti hain
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        // 2. Target se data milne ke baad apna Custom Response banana
        const originalResponse = response.data;

        // Aapka Custom JSON Structure jo aap chahte thay
        const myBrandedResponse = {
            message: "PROFESSOR AMMAR NEW METHODS ON", // Jaisa aapne manga
            info: "Visit ammar-tool-free-9866.hstn.me for more tools.", // Ya apna link lagayein
            
            // Yahan apka naam aayega
            owner: "⫷ PROFESSOR AMMAR ⫸", 
            credit: "MADE BY PROFESSOR AMMAR",
            
            // Apna channel link yahan dalein
            channel_link: "https://whatsapp.com/channel/0029VbBEWeUICVfc8ipiWg2q.", 
            
            // Asli API ka kaam (Reaction/Data) yahan show hoga
            api_result: originalResponse
        };

        // 3. User ko response bhejna
        res.status(200).json(myBrandedResponse);

    } catch (error) {
        // Agar target API fail ho jaye
        res.status(500).json({
            status: "Error",
            owner: "PROFESSOR AMMAR",
            message: "Target API connect nahi ho saki.",
            error_log: error.message
        });
    }
}
